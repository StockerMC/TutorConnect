import { pocketbase } from '$lib/pocketbase';
import type { ListingsRecord } from '$lib/pocketbase-types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		listings: await pocketbase.collection("listings").getFullList() as ListingsRecord[],
	};
};