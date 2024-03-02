import PocketBase from "pocketbase";
import {
	SECRET_POCKETBASE_URL,
	SECRET_POCKETBASE_EMAIL,
	SECRET_POCKETBASE_PASSWORD
} from "$env/static/private";

export const pocketbase = new PocketBase(SECRET_POCKETBASE_URL);
await pocketbase.admins.authWithPassword(SECRET_POCKETBASE_EMAIL, SECRET_POCKETBASE_PASSWORD);
pocketbase.autoCancellation(false);
