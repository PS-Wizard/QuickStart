// src/routes/logout/+server.ts
import type { RequestHandler } from './$types';

export const POST: RequestHandler = ({ locals, cookies }) => {
    locals.pb.authStore.clear();
    cookies.delete('pb_auth', { path: '/' });
    locals.user = null;

    return new Response(null, { status: 200 });
};
