<script lang="ts">
	// import { enhance } from "$app/forms";

	import type { PageData } from "./$types";

	import emblaCarouselSvelte from "embla-carousel-svelte";

	import EmblaCarousel from "embla-carousel";
	import type { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
	import { browser } from "$app/environment";	
	export let data: PageData;
</script>

<!-- <form method="POST" action="?/listings" use:enhance> -->
<div
	class="flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-br from-blue-100 to-blue-300"
>
    <h1 class="text-4xl font-bold text-center">Listings</h1>
    <div class="grid grid-cols-3 items-center justify-center gap-10 p-5">
        {#each data.listings as listing}
            <div
                class="shadow-2xl flex flex-col justify-center text-left items-start p-7 mt-5 border-2 rounded-3xl bg-white"
            >
                <h2 class="text-3xl font-semibold">{listing.title}</h2>
                <h3 class="text-2xl">{listing.full_name}</h3>
                <ul>
                    {#each (listing.subjects ?? '').split(', ') as subject}
                        <li>● {subject}</li>
                    {/each}
                </ul>
                <p class="mt-4">{listing.description}</p>
            </div>
        {/each}
    </div>

</div>

<!-- </form> -->

