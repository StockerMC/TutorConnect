import type { Actions } from "./$types";
import { redirect } from "@sveltejs/kit";


export const actions = {
    logout: async (event) => {
        event.cookies.delete("username", {
            path: "/",
            secure: false
        });
        redirect(303, "/login");
    }
} satisfies Actions;
