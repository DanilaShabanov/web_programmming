<script lang="ts">
	import { CitiesService } from "./service/Dishs.service";
	import { KitchenService } from "./service/kitchensone.service";
	import HomePage from "./page/home.svelte";
	import DishPage from "./page/Dishs.svelte";
	import KitchenPage from "./page/kitchensone.svelte";
	import type { Dish } from "./model/Dishs.model";
	import type { Kitchen } from "./model/kitchensone.model";

	import "./../public/style.css";

	const citiesService = new CitiesService("http://localhost:3000");
	const kitchenService = new KitchenService("http://localhost:3000");

	let page: "home" | "Dishs" | "Kitchens" | null = null;

	let citiesList: Array<Dish> | null = null;

	let pageContent: {
		Dishs: Dish | null;
		kitchenList?: Array<Kitchen>;
		KitcheN?: Kitchen;
	} | null = null;

	function clearPage(): void {
		page = null;
		pageContent = null;
	}

	function toHome(): void {
		clearPage();

		const onLoad = () => {
			page = "home";
			pageContent = null;
		};

		return onLoad();
	}

	function toDish(id: number): void {
		clearPage();

		const onLoad = (kitchen: Array<Kitchen>) => {
			page = "Dishs";
			pageContent = {
				Dishs: citiesList.find((Dishs) => Dishs.id === id),
				kitchenList: kitchen,
			};
		};

		return kitchenService.getByDish(id, onLoad);
	}


	function toKitchen(id: number): void {
		clearPage();

		const onLoad = (KitcheN:Kitchen) => {
			page = "Kitchens";
			pageContent = {
				Dishs: citiesList.find((Dishs) => Dishs.id === KitcheN.Dish_id),
				KitcheN,
			};
		};

		return kitchenService.get(id, onLoad);
	}

	citiesService.getAll((kitchen1) => {
		citiesList = kitchen1;
		toHome();
	});
</script>

<header>
	<div class="title" on:click={toHome}>
		<h1>Рецепты</h1>
	</div>
	<div class="header_section">
		<ul>
			{#if citiesList}
				{#each citiesList as Dishs}
					<li class="header_names category" on:click={() => toDish(Dishs.id)} >
						{Dishs.title}
					</li>
				{/each}
			{/if}
		</ul>
	</div>
</header>

<main class="main">
	{#if page === "home"}
		<HomePage />
	{:else if page === "Dishs"}
		<DishPage
		Dishs={pageContent.Dishs}
			kitchen={pageContent.kitchenList}
			selectKitchen={toKitchen}
		/>
	{:else if page === "Kitchens"}
		<KitchenPage kitchens={pageContent.KitcheN} />
	{:else}
		Загрузка...
	{/if}
</main>

<footer>
	<div class="footer"> Рецепты</div>
</footer>
