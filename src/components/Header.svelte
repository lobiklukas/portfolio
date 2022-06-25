<script lang="ts">
	import { page } from '$app/stores';
	import ThemeChange from './ThemeChange.svelte';

	const sections = ['About', 'Experience', 'Work', 'Contact'];
</script>

<header class="px-16 my-4 flex w-full items-center fixed top-0 z-20">
	<div class="flex w-full items-center justify-between">
		<h1 class="text-xl text-primary font-mono">Lukáš Lobík</h1>

		<nav class="flex font-mono text-sm gap-8 items-center">
			<ul class="flex gap-8">
				{#each sections as section, i}
					<li class:active={$page.url.pathname === `#${section}`}>
						<a href={`#${section}`}><span class="text-primary">0{i + 1}.</span> {section}</a>
					</li>
				{/each}
			</ul>
			<ThemeChange />
		</nav>
	</div>
</header>
