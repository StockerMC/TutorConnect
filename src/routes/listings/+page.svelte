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
	class="flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 w-full h-full px-64 pb-8"
>
    <h1 class="text-4xl font-bold text-center mt-8">Listings</h1>
    <div class="flex flex-col justify-start items-center mt-8 gap-y-10 w-full h-full">
        <!-- <p>test</p> -->
        <!-- TODO: created at !!!! -->
        {#each data.listings as listing}
            <div
                class="shadow-2xl flex justify-center text-left items-start p-7 border-2 rounded-3xl bg-white w-full h-[200%] gap-2"
            >
                <!-- <h2 class="text-3xl font-semibold capitalize underline">{listing.title?.trim()}</h2>
                <h3 class="text-2xl mt-3">{listing.full_name}</h3>
                <ul>
                    {#each (listing.subjects ?? '').split(', ') as subject}
                        <li class="capitalize">● {subject}</li>
                    {/each}
                </ul>
                <p>{listing.description}</p> -->
                <div class="w-1/3">
                    <h2 class="text-2xl font-semibold w-full">{listing.full_name}</h2>
                    <h2 class="text-md italic">{listing.email}</h2>
                    <div class="flex flex-wrap gap-x-2 gap-y-1 tags">
                        <p class="ml-3 mt-1.5">
                            {#each (listing.subjects ?? '').split(', ') as subject}
                                <span class="capitalize">{subject}</span>
                            {/each}
                        </p>
                    </div>
                </div>
                <div class="w-2/3 flex flex-col justify-between items-start gap-3">
                    <div>
                        <h2 class="text-2xl font-semibold underline">{listing.title}</h2>
                        <p>{listing.description}</p>
                    </div>
                    <button class="px-2 py-1.5 font-semibold rounded-xl bg-[#3243A5] text-white" on:click={() => {
                        window.open('mailto:{email}?subject=Tutoring%20Services&body=RE%3A%20%7Btitle%7D%0D%0A%0D%0ADear%20%7Bname%7D%2C%0D%0A%0D%0AI%20was%20interested%20in%20your%20tutoring%20services%20and%20would%20like%20to%20discuss%20them%20further%20with%20you.%0D%0A%0D%0ASincerely%2C%0D%0A%7Busername%7D%0D%0A'
                            .replace('{email}', listing.email ?? '')
                            .replace('{name}', listing.full_name ?? '')
                            .replace('{title}', listing.title ?? '')
                            .replace('{username}', listing.username ?? '')
                        )
                    }}>Connect!</button>
                </div>
            </div>
        {/each}
    </div>
</div>
<style>
    .tags span {    
    display: inline-block;
    height: 24px;
    line-height: 24px;
    position: relative;
    margin: 0 16px 8px 0;
    padding: 0 10px 0 12px;
    background: #3243A5;    
    -webkit-border-bottom-right-radius: 3px;    
    border-bottom-right-radius: 3px;
    -webkit-border-top-right-radius: 3px;    
    border-top-right-radius: 3px;
    -webkit-box-shadow: 0 1px 2px rgba(0,0,0,0.2);
    box-shadow: 0 1px 2px rgba(0,0,0,0.2);
    color: #fff;
    font-size: 12px;
    font-family: "Lucida Grande","Lucida Sans Unicode",Verdana,sans-serif;
    text-decoration: none;
    text-shadow: 0 1px 2px rgba(0,0,0,0.2);
    font-weight: bold;
    }

    /* .tags span:nth-child() { */
        
    /* margin-left: 10px; */
    /* } */

    .tags span:before {
    content: "";
    position: absolute;
    top:0;
    left: -12px;
    width: 0;
    height: 0;
    border-color: transparent #3243A5 transparent transparent;
    border-style: solid;
    border-width: 12px 12px 12px 0;        
    }

.tags span:after {
    content: "";
    position: absolute;
    top: 10px;
    left: 1px;
    float: left;
    width: 5px;
    height: 5px;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    background: #fff;
    -webkit-box-shadow: -1px -1px 2px rgba(0,0,0,0.4);
    box-shadow: -1px -1px 2px rgba(0,0,0,0.4);
    }
</style>

<!-- </form> -->

