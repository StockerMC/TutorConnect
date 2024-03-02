import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = (event) => {
	const { pathname } = event.url;
	return {
		pathname
	};
};
