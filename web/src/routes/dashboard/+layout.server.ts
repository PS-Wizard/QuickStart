import { redirect, type ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = ({ locals, cookies }) => {
    console.log('Dashboard load - user:', locals.user);
    console.log('Dashboard load - cookie:', cookies.get('pb_auth'));
    if (!locals.user) {
        throw redirect(303, '/login');
    }

    return {
        user: locals.user
    };
};
