<script lang="ts">
	import Header from '$components/Header.svelte';
	import Github from '$components/icons/Github.svelte';
	import LinkedIn from '$components/icons/LinkedIn.svelte';
	import { socials } from '$lib/data';
	import { IconEnum } from '$lib/types';
	import { Icon } from '@steeze-ui/svelte-icon';

	import '../app.css';

	const socialIcons = {
		[IconEnum.Github]: Github,
		[IconEnum.LinkedIn]: LinkedIn
	};
</script>

<Header />

<main class="px-[150px] max-w-[1600px] mx-auto w-full">
	<slot />
</main>

<div
	class="w-10  fixed right-10 z-10 left-auto bottom-0 after:w-[2px] after:h-20 after:mx-auto after:block after:bg-base-content"
	aria-orientation="vertical"
>
	<ul class="flex flex-col items-center gap-8 pb-8">
		{#each socials as social}
			<li class="transition ease-in-out duration-300 hover:-translate-y-1 ">
				<a class="hover:fill-primary-focus fill-base-content" href={social.href} target="_blank"
					><svelte:component this={socialIcons[social.icon]} />
				</a>
			</li>
		{/each}
	</ul>
</div>

<footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap');
</style>
