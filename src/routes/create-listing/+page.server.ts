import type { Actions } from "./$types";
import { fail, redirect } from "@sveltejs/kit";
import { pocketbase } from "$lib/pocketbase";

export const actions = {
    "create-listing": async (event) => {
        const data = await event.request.formData();
        // const username = data.get("username");
        const username = event.cookies.get("username");
        const fullName = data.get("fullname");
        const subjects = data.get("subjects");
        const email = data.get("email");
        const title = data.get("title");
        const description = data.get("description");

        if (!username || !fullName || !subjects || !email || !title || !description || typeof username !== 'string' || typeof fullName !== 'string' || typeof subjects !== 'string' || typeof email !== 'string' || typeof title !== 'string' || typeof description !== 'string') {
            return fail(400, {
                error: "error in data"
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

        await pocketbase.collection("listings").create({
            username,
            fullName,
            subjects,
            email,
            title,
            description,
        });

        redirect(303, "/");
    }
} satisfies Actions;
