<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;

	let search = "";
</script>

<div class="flex flex-col items-center justify-center bg-black w-full h-full px-64 pb-8">
	<h1 class="text-4xl font-bold text-center mt-8 text-white">Listings</h1>
	<input
		class="rounded-lg px-24 pt-4 pb-4 m-6 text-2xl border-2 bg-black text-white border-grey"
		placeholder="Search:"
		bind:value={search}
	/>
	<div class="flex flex-col justify-start items-center mt-8 gap-y-10 w-full h-full">
		{#each data.listings.filter((l) => l.title
					?.toLowerCase()
					.includes(search.toLowerCase()) || l.description
					?.toLowerCase()
					.includes(search.toLowerCase()) || l.full_name
					?.toLowerCase()
					.includes(search.toLowerCase()) || l.subjects
					?.toLowerCase()
					.includes(search.toLowerCase())) as listing}
			<div
				class="shadow-2xl flex justify-center text-left items-start p-7 border-2 rounded-3xl bg-white w-full h-[200%] gap-2 thing"
			>
				<div class="w-1/3">
					<h2 class="text-2xl font-semibold w-full">{listing.full_name}</h2>
					<h2 class="text-md italic">{listing.email}</h2>
					<div class="flex flex-wrap gap-x-2 gap-y-1 tags">
						<p class="ml-3 mt-1.5">
							{#each (listing.subjects ?? "").split(", ") as subject}
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
					<button
						class="px-2 py-1.5 font-semibold rounded-xl text-black bg-white ani duration-300"
						on:click={() => {
							window.open(
								"mailto:{email}?subject=Tutoring%20Services&body=RE%3A%20%7Btitle%7D%0D%0A%0D%0ADear%20%7Bname%7D%2C%0D%0A%0D%0AI%20was%20interested%20in%20your%20tutoring%20services%20and%20would%20like%20to%20discuss%20them%20further%20with%20you.%0D%0A%0D%0ASincerely%2C%0D%0A%7Busername%7D%0D%0A"
									.replace("{email}", listing.email ?? "")
									.replace("{name}", listing.full_name ?? "")
									.replace("{title}", listing.title ?? "")
									.replace("{username}", listing.username ?? "")
							);
						}}
						>Connect!
					</button>
				</div>
			</div>
		{/each}
		{#if data.listings.filter((l) => l.title
					?.toLowerCase()
					.includes(search.toLowerCase()) || l.description
					?.toLowerCase()
					.includes(search.toLowerCase()) || l.full_name
					?.toLowerCase()
					.includes(search.toLowerCase()) || l.subjects
					?.toLowerCase()
					.includes(search.toLowerCase())).length === 0}
			<h1 class="text-2xl font-semibold text-white">No listings found</h1>
		{/if}
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
		background: #ffffff;
		-webkit-border-bottom-right-radius: 3px;
		border-bottom-right-radius: 3px;
		-webkit-border-top-right-radius: 3px;
		border-top-right-radius: 3px;
		-webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
		color: #000000;
		font-size: 12px;
		font-family: "Lucida Grande", "Lucida Sans Unicode", Verdana, sans-serif;
		text-decoration: none;
		text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
		font-weight: bold;
	}

	.tags span:before {
		content: "";
		position: absolute;
		top: 0;
		left: -12px;
		width: 0;
		height: 0;
		border-color: transparent #ffffff transparent transparent;
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
		-webkit-box-shadow: -1px -1px 2px rgba(0, 0, 0, 0.4);
		box-shadow: -1px -1px 2px rgba(0, 0, 0, 0.4);
	}

	.thing {
		background-color: black;
		color: white;
		border-color: #2d2d2d;
	}

	.ani:hover {
		background-color: #d5d5d5;
		transition: 0.3s;
	}

	.border-grey {
		border-color: #2d2d2d;
	}

	.border-grey::placeholder {
		color: #595959;
	}
</style>
