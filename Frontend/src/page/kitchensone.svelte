<script lang="ts">
	import type { Kitchen } from '../model/kitchensone.model';

	export let kitchens: Kitchen;
</script>

<svelte:head>
	<title>{kitchens.first_name} {kitchens.last_name}</title>
</svelte:head>

<div class="Kitchens-title"><h3>{kitchens.last_name} {kitchens.first_name}</h3></div>
<div class="card">
	<img class="image" src="{kitchens.avatar_url}" alt="">
	<div class="text">{kitchens.text}</div>
</div>

