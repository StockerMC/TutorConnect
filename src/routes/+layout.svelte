<script>
    import "../app.css";
    import { slide } from "svelte/transition";
    import Logo from "$lib/components/Logo.svelte";

    export let data;
</script>

<nav class="h-20 w-screen top-0 left-0 bg-gradient-to-br bg-blue-950 flex items-center justify-between px-4">
    <div>
        <Logo/>
    </div>
    <div class="flex items-center space-x-20">
        <a class="text-white font-bold py-2 rounded-xl hover-fill duration-300 cursor-pointer" href="/">Home</a>
        <a class="text-white font-bold py-2 rounded-xl hover-fill duration-300 cursor-pointer" href="/listings">Listings</a>
        <a class="text-white font-bold py-2 rounded-xl hover-fill duration-300 cursor-pointer" href="/create-listing">Create Listing</a>
        <a class="text-black font-bold px-8 py-3 bg-blue-200 rounded-xl hover-fill-button duration-300" href="/listings">Get Started</a>
        <form method="POST" action="?/logout">
            <button class="text-black font-bold px-8 py-3 bg-blue-200 rounded-xl hover-fill-button duration-300">Logout</button>
        </form>
    </div>
</nav>


{#key data.pathname}
    <div transition:slide>
        <slot/>
    </div>
{/key}

<style>
    .hover-fill:hover {
        transition: 0.3s;
        color: #90b5e7;
    }

    .hover-fill-button:hover {
        transition: 0.3s;
        background-color: #6da9fc;
    }
</style>
