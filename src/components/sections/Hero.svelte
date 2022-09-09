<script>
	import { ButtonSizeEnum } from '$lib/types';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { ArrowRight } from '@steeze-ui/heroicons';

	import Button from '../Button.svelte';
	import { socials } from '$lib/data';
</script>

<section class="min-h-screen flex flex-col mx-auto justify-center max-w-[1000px]">
	<h4 class="text-primary font-mono">Hi, my name is</h4>
	<h1 class="text-7xl font-bold mt-4">Lukáš Lobík</h1>
	<h1 class="text-7xl font-bold mt-4 opacity-50">I build things for the web.</h1>
	<p class="max-w-[540px] text-base-content/80 mt-8">
		I’m a software engineer specializing in building (and occasionally designing) exceptional
		digital experiences. Currently, I’m focused on building accessible, human-centered products at
		Upstatement.
	</p>
	<div class="mt-8">
		<a href={socials.find((item) => item.name === 'linkedin')?.href} target="_blank">
			<Button isOutline>
				Check out my linkedin <Icon src={ArrowRight} class="h-4 w-4 ml-2" />
			</Button>
		</a>
	</div>
</section>
