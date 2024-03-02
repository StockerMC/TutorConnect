import type { Actions } from "./$types";
import { fail, redirect } from "@sveltejs/kit";
import { pocketbase } from "$lib/pocketbase";

export const actions = {
    "create-listing": async (event) => {
        const data = await event.request.formData();
        // const username = data.get("username");
        const username = event.cookies.get("username");
        const full_name = data.get("full_name");
        const subjects = data.get("subjects");
        const email = data.get("email");
        const title = data.get("title");
        const description = data.get("description");

        if (!username || !full_name || !subjects || !email || !title || !description || typeof username !== 'string' || typeof full_name !== 'string' || typeof subjects !== 'string' || typeof email !== 'string' || typeof title !== 'string' || typeof description !== 'string') {
            console.log({
                username,full_name,subjects,email,title,description
            });
            return fail(400, {
                error: "error in data"
            });
        }

        try {
            console.log({
                username,
                full_name,
                subjects,
                email,
                title,
                description,
            });
            await pocketbase.collection("listings").create({
                username,
                full_name,
                subjects,
                email,
                title,
                description,
            });
        } catch (e) {
            console.log(e);
        }

        redirect(303, "/");
    }
} satisfies Actions;
