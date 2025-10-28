import { redirect, fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
    default: async ({ locals, request }) => {
        const data = await request.formData();
        const email = data.get('email') as string;
        const password = data.get('password') as string;
        const passwordConfirm = data.get('passwordConfirm') as string;

        if (password !== passwordConfirm) {
            return fail(400, { error: 'Passwords do not match' });
        }

        try {
            await locals.pb.collection('users').create({
                email,
                password,
                passwordConfirm
            });

            await locals.pb.collection('users').authWithPassword(email, password);
        } catch (err) {
            return fail(400, { error: 'Registration failed' });
        }

        throw redirect(303, '/dashboard');
    }
};
