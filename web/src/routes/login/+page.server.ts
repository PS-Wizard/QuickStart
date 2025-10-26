import { redirect, fail } from '@sveltejs/kit';
import type { Actions } from './$types';
export const actions: Actions = {
    default: async ({ locals, request }) => {

        const data = await request.formData();
        const email = data.get('email') as string;
        const password = data.get('password') as string;

        console.log('Attempting login with:', email);

        try {
            await locals.pb.collection('users').authWithPassword(email, password);
        } catch (err) {
            return fail(400, { error: 'Invalid credentials' });
        }

        throw redirect(303, '/dashboard');

    }
};
