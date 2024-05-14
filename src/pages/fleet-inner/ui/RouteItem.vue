<script setup>
import { RouterLink } from 'vue-router';

import { Button, Title } from '@/shared/ui';

defineProps(['route']);
</script>

<template>
	<div class="route-item">
		<div class="image-wrapper">
			<img :src="route.img" alt="" />
		</div>
		<div class="text">
			<Title variant="h4">{{ route.title }}</Title>
			<p>
				{{ route.text }}
			</p>
			<Button variant="outline"><RouterLink :to="route.url">Подробнее</RouterLink></Button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.route-item {
	display: grid;
	grid-template-columns: 1fr 0.47fr;
	gap: 50px;
	@media (max-width: $tab) {
		grid-template-columns: 1fr;
		gap: 20px;
	}
	.image-wrapper {
		padding-bottom: 60%;
		position: relative;
		border-radius: 8px;
		overflow: hidden;
		@media (max-width: $tab) {
			padding-bottom: 50%;
		}
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			position: absolute;
		}
	}
	.text {
		h4 {
			text-align: left;
			text-transform: none;
			@media (max-width: $tab) {
				font-size: 24px;
				line-height: 28px;
			}
		}
		p {
			margin-top: 15px;
			font-weight: 400;
			font-size: 16px;
			line-height: 22px;
			margin-bottom: 50px;
		}
		button {
			max-width: 200px;
			width: 100%;
		}
	}
}
</style>
