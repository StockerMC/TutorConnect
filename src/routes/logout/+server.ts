import { redirect } from "@sveltejs/kit";
import type { RequestHandler } from "@sveltejs/kit";

export const POST: RequestHandler = async (event) => {
    event.cookies.delete("username", {
        path: "/",
        secure: false,
        httpOnly: false
    });

    throw redirect(303, "/");
};