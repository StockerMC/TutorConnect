import type { Actions } from "./$types";
import { fail, redirect } from "@sveltejs/kit";
import { pocketbase } from "$lib/pocketbase";

export const actions = {
    login: async (event) => {
        const data = await event.request.formData();
        const username = data.get("username");

        if (!username || typeof username !== "string") {
            return fail(400, {
                error: "username is required"
            });
        }

        if (!/^[a-zA-Z0-9]{3,16}$/.test(username)) {
            return fail(400, {
                error: "username must be alphanumeric and between 3 and 16 characters"
            });

        }

        let shouldCreate;
        try {
            await pocketbase.collection("usernames").getFirstListItem(`username = "${username}"`);
            shouldCreate = false;
        } catch (e) {
            shouldCreate = true;
        }

        if (shouldCreate) {
            await pocketbase.collection("usernames").create({
                username
            });
        }

        event.cookies.set("username", username, {
            path: "/"
        });

        redirect(303, "/");
    }
} satisfies Actions;
