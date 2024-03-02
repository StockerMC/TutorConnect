<script>
    import "../app.css";
    import { slide } from "svelte/transition";

    export let data;
</script>

<nav class="h-20 w-screen top-0 left-0 bg-gradient-to-br bg-blue-950">
    <div class="flex items-center h-full px-4">
        <a
                class="text-center text-black font-bold pl-4 pr-4 pt-2 pb-2 bg-blue-200 rounded-xl ml-auto align-middle hover-fill duration-300"
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
    .hover-fill:hover {
        transition: 0.3s;
        background: #85a7e3;
    }
</style>
