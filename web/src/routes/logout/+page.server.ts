import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
    default: ({ locals, cookies }) => {
        locals.pb.authStore.clear();
        cookies.delete('pb_auth', { path: '/' });
        throw redirect(303, '/login');
    }
};
