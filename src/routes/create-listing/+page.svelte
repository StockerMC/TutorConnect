<script lang="ts">
	import { enhance } from "$app/forms";
	import type { ActionData } from "./$types";

	export let form: ActionData;
</script>

<form method="POST" action="?/create-listing" use:enhance>
	<div
		class="flex flex-col items-center justify-center p-16 bg-gradient-to-br from-blue-100 to-blue-300"
	>
		<div
			class="shadow-2xl flex flex-col justify-center items-center p-20 border-2 rounded-3xl bg-white"
		>
			<div class="text-4xl font-bold text-center">Create Listing</div>
			<div class="mt-4 flex flex-col">
				<input
					type="text"
					name="full_name"
					id="full_name"
					placeholder="Full Name"
					class="rounded-lg pl-8 pr-8 pt-4 pb-4 m-6 text-2xl border-2"
					required
				/>
				<input
					type="text"
					name="subjects"
					id="subjects"
					placeholder="Subjects"
					class="rounded-lg pl-8 pr-8 pt-4 pb-4 m-6 text-2xl border-2"
					required
				/>
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Email"
					class="rounded-lg pl-8 pr-8 pt-4 pb-4 m-6 text-2xl border-2"
					required
				/>
				<input
					type="text"
					name="title"
					id="title"
					placeholder="Title"
					class="rounded-lg pl-8 pr-8 pt-4 pb-4 m-6 text-2xl border-2"
					required
				/>
				<input
					type="text"
					name="description"
					id="description"
					placeholder="Description"
					class="rounded-lg pl-8 pr-8 pt-4 pb-4 m-6 text-2xl border-2"
					required
				/>
			</div>
			<div class="mt-3">
				<button
					type="submit"
					class="bg-blue-500 text-white rounded-lg pt-4 pb-4 pr-32 pl-32 w-full text-2xl hover-fill duration-300"
					>Post Listing
				</button>
			</div>
		</div>
	</div>
</form>

<style>
	.hover-fill:hover {
		transition: 0.3s;
		background: #0051d2;
	}
</style>
