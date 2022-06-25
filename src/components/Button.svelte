<script lang="ts">
	import { ButtonSizeEnum } from '$lib/types';

	export let size: ButtonSizeEnum = ButtonSizeEnum.md;
	export let isOutline = false;

	const getSizeClass = (size: ButtonSizeEnum) => {
		switch (size) {
			case ButtonSizeEnum.xs:
				return 'btn-xs';
			case ButtonSizeEnum.sm:
				return 'btn-sm';
			case ButtonSizeEnum.md:
				return 'btn-md';
			case ButtonSizeEnum.lg:
				return 'btn-lg';
			default:
				return 'btn-md';
		}
	};

	const sizeClass = getSizeClass(size);
</script>

<button class={`btn btn-primary ${sizeClass}`} class:btn-outline={isOutline}>
	<slot />
</button>
