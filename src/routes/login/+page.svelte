<script lang="ts">
	import { enhance } from "$app/forms";
	import type { ActionData } from "./$types";

	export let form: ActionData;
</script>

<form method="POST" action="?/login" use:enhance>
	<div
		class="flex flex-col items-center justify-center h-screen w-screen bg-black"
	>
		<div
			class="shadow-2xl flex flex-col justify-center items-center p-7 border-2 rounded-3xl bg-black border-grey"
		>
			<div class="text-4xl font-bold text-center text-white">Login</div>
			{#if form?.error}
				<h1 class="pt-8 text-red-600">
					Error: username must be 3 to 16 characters (inclusive) and alphanumeric
				</h1>
			{/if}
			<div class="mt-4">
				<input
					type="text"
					name="username"
					id="username"
					placeholder="Username"
					class="rounded-lg pl-2 pr-2 pt-4 pb-4 m-6 text-2xl border-2"
					required
				/>
			</div>
			<div class="mt-3">
				<button
					type="submit"
					class="bg-white text-black rounded-lg pt-4 pb-4 pr-32 pl-32 w-full text-2xl border-2 duration-300 hover-fill border-grey"
					>Login
				</button>
			</div>
		</div>
	</div>
</form>

<style>
	.hover-fill:hover {
		transition: 0.3s;
		background: #cccccc;
	}

	.border-grey {
		border-color: #2d2d2d;
	}

	input {
		background-color: black;
		border-color: #2d2d2d;
		color: white;
	}

	input::placeholder {
		color: #525252;
	}
</style>
