<script>
    import "../app.css";
    import { slide } from "svelte/transition";

    export let data;
</script>

<nav class="h-20 w-screen fixed top-0 left-0 bg-gradient-to-br from-blue-300 to-blue-100">
    <div class="flex items-center h-full px-4">
        <a
                class="text-center text-white font-bold pl-4 pr-4 h-[70%] bg-blue-950 rounded-2xl ml-auto align-middle"
                href="create-listing">Get Started</a
        >
    </div>
</nav>

{#key data.pathname}
    <div transition:slide>
        <slot/>
    </div>
{/key}

<style>
</style>
