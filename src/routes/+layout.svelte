<script>
    import "../app.css";
    import { slide } from "svelte/transition";
    import Logo from "$lib/components/Logo.svelte";

    export let data;
</script>

<nav class="h-20 w-screen top-0 left-0 bg-gradient-to-br bg-blue-950">
    <div class="absolute top-4 left-4">
        <Logo/>
    </div>
    <div class="flex items-center h-full px-4">
        <a class="text-center text-white font-bold pl-4 pr-4 pt-2 pb-2 rounded-xl ml-auto align-middle hover-fill duration-300 cursor-pointer"
           href="/">Home</a>
        <a
                class="text-center text-black font-bold pl-4 pr-4 pt-2 pb-2 bg-blue-200 rounded-xl ml-auto align-middle hover-fill duration-300"
                href="/listings">Get Started</a
        >
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
        background: #f1f7ff;
    }
</style>
