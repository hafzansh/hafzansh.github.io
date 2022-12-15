<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	const carouselImages = [
		'/images/photo_2022-12-04_01-53-41.jpg',
		'/images/photo_2022-12-04_02-10-06.jpg'
	];
	let i = 0;
	let timer;
	let ready = false;
	let visible = true;
	onMount(() => {
		ready = true;
		timer = setInterval(() => {
			i = (i + 1) % carouselImages.length;
		}, 2000);
	});
	$: src = carouselImages[i];
</script>

<div class="flex flex-row justify-center items-center min-h-screen">
	<!-- <div class="perspective-4">
		<div class="p-4 rotate-y-20 rotate-x-10 ">
			<div class="mockup-phone">
				<div class="camera" />
				<div class="display">
					<div class="artboard artboard-demo phone-1">as</div>
				</div>
			</div>
		</div>
	</div>
	<div class="perspective-4">
		<div class="p-4 -rotate-y-20 rotate-x-10 ">
			<div class="mockup-phone scale-75">
				<div class="camera mt-3 " />
				<div class="display aspect-[9/19.5]">
					<div class="artboard artboard-demo phone-1 mt-1">
						{#each [carouselImages[i]] as src}
							<img transition:fly={{ y: 200, duration: 2000 }} {src} class="mt-[120px]" alt="" />
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div> -->
	<div class="mockup-phone scale-75">
		<div class="camera " />
		<div class="display aspect-[9/19.5]">
			{#each [carouselImages[i]] as src (i)}
				<div class="artboard artboard-demo phone-1 bg-transparent">
					<img transition:fade {src} class="mt-[120px]" alt="" />
				</div>
			{/each}
		</div>
	</div>
</div>
