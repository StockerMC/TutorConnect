import type { Actions } from "./$types";
import { fail } from "@sveltejs/kit";

export const actions = {
    login: async (event) => {
        const data = await event.request.formData();
        const username = data.get("username");

        if (!username || typeof username !== "string") {
            return fail(400, {
                error: "username is required"
            });
        }

        event.cookies.set("username", username, {
            path: "/"
        });

        return {
            success: true
        };
    },
} satisfies Actions;