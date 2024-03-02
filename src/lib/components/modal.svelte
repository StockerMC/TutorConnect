<script>
	export let classInfo = "w-[50rem] h-[30rem]";

	export let hidden = false;
</script>

<div
	class="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-50"
	style="background-color: rgba(0,0,0,0.2)"
	class:hidden
>
	<div class="relative shadow-2xl bg-white rounded-3xl {classInfo} z-50 pt-16 p-10">
		<span
			class="absolute top-2 right-4 text-black text-4xl select-none x-button"
			on:pointerdown={() => (hidden = true)}>x</span
		>
		<slot />
	</div>
</div>

<style>
	.x-button {
		cursor: pointer;
		transition: all 0.1s linear;
	}
	.x-button:hover {
		color: rgb(128, 128, 128);
		transition: all 0.1s linear;
	}
</style>
