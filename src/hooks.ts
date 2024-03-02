import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
	if (event.url.pathname.startsWith("/login")) {
		console.log(event.cookies.get("username"));
		if (event.cookies.get("username")) {
			return new Response(null, {
				status: 300,
				headers: { location: "/" }
			});
		}
		return resolve(event);
	}

	if (!event.cookies.get("username") && event.url.pathname !== "/home") {
		return new Response(null, {
			status: 300,
			headers: { location: "/login" }
		});
	}

	return resolve(event);
};
