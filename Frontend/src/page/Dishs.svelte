<script lang="ts">
	import type { Dish } from "../model/Dishs.model";
	import type { Kitchen } from "../model/kitchensone.model";

	export let Dishs: Dish;

	export let kitchen: Array<Kitchen>;

	export let selectKitchen: (id: number) => void;
</script>

<svelte:head>
	<title>Sweeter - {Dishs.title}</title>
</svelte:head>

{#each kitchen as kitchens}
	<div class="account-item">
		<div
			class="account-image"
			id="${kitchens.id}"
			on:click={() => selectKitchen(kitchens.id)}>
			<img alt="" src="{kitchens.avatar_url}" />

			<div class="account-info">
				<h2 class="account-name">{kitchens.first_name} {kitchens.last_name}</h2>
				<div class="account-text">
					<p>{kitchens.text}</p>
				</div>

			</div>
		</div>
	</div>
{/each}
