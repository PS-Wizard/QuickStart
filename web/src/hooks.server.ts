import { createPocketBase } from "$lib/utils/pocketbase";
import type { Handle } from "@sveltejs/kit";


export const handle: Handle = async ({ event, resolve }) => {
    event.locals.pb = createPocketBase();
    const cookieStr = event.request.headers.get('cookie') || '';
    event.locals.pb.authStore.loadFromCookie(cookieStr);

    try {
        if (event.locals.pb.authStore.isValid) {
            await event.locals.pb.collection('users').authRefresh();
        }
    } catch (_) {
        event.locals.pb.authStore.clear();
    }

    event.locals.user = event.locals.pb.authStore.record;

    const response = await resolve(event);

    response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
        path: '/'
    }));

    return response
}
