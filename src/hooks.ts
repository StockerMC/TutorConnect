import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
    if (event.url.pathname.startsWith('/login')) {
        return await resolve(event);
    }

    if (!event.cookies.get('username')) {
        return Response.redirect(event.url.origin + '/login', 303);
    }
    
	const response = await resolve(event);
	return response;
};