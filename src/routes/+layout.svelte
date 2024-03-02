<script lang="ts">
    import "../app.css";
    import { slide } from "svelte/transition";
    import Logo from "$lib/components/Logo.svelte";
    import { page } from "$app/stores";
    import { enhance } from "$app/forms";

    export let data;
</script>

<nav
        class="h-24 w-full top-0 left-0 bg-gradient-to-br bg-black flex items-center justify-between px-4 border-b-2 border-grey"
>
    <div>
        <Logo/>
    </div>
    <div class="flex items-center space-x-20">
        <a
                class="text-white font-bold py-2 px-4 hover-fill duration-300 cursor-pointer"
                href="/"
                class:border-bottom-white={$page.url.pathname === "/"}>Home</a
        >
        <a
                class="text-white font-bold py-2 px-4 hover-fill duration-300 cursor-pointer"
                href="/listings"
                class:border-bottom-white={$page.url.pathname === "/listings"}>Listings</a
        >
        <a
                class="text-white font-bold py-2 px-4 hover-fill duration-300 cursor-pointer"
                href="/create-listing"
                class:border-bottom-white={$page.url.pathname === "/create-listing"}>Create Listing</a
        >
        <a
                class="text-black font-bold px-8 py-3 bg-white rounded-xl hover-fill-button duration-300"
                href="/listings"
                class:border-bottom-white={$page.url.pathname === "/listings"}>Get Started</a
        >
        <a
                href="/login"
                class="text-black font-bold px-8 py-3 bg-white rounded-xl hover-fill-button duration-300"
        >Login
        </a>
        <form action="/logout" method="POST" use:enhance>
            <button
                    class="text-black font-bold px-8 py-3 bg-white rounded-xl hover-fill-button duration-300"
            >Logout
            </button>
        </form>
    </div>
</nav>

{#key $page}
    <div transition:slide class="">
        <slot/>
    </div>
{/key}

<style>
    .hover-fill:hover {
        transition: 0.3s;
        color: #d9d9d9;
    }

    .hover-fill-button:hover {
        transition: 0.3s;
        background-color: #d9d9d9;
    }

    .border-grey {
        border-color: #2d2d2d;
    }

    .border-bottom-white {
        border-bottom: 2px solid #fff;
        transition: 0.3s;
    }
</style>
