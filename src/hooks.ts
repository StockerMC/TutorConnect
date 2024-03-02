import type { Handle } from "@sveltejs/kit";
import { loggedIn } from "$lib/stores";

export const handle: Handle = async ({event, resolve}) => {
    loggedIn.set(!!event.cookies.get("username"));

    if (event.url.pathname.startsWith("/login")) {
        console.log(event.cookies.get("username"));
        if (event.cookies.get("username")) {
            return new Response(null, {
                status: 300,
                headers: {location: "/"}
            });
        }
        return resolve(event);
    }

    if (!event.cookies.get("username") && event.url.pathname !== "/") {
        return new Response(null, {
            status: 300,
            headers: {location: "/login"}
        });
    }

    return resolve(event);
};
