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
.route-item {
	display: grid;
	grid-template-columns: 1fr 0.47fr;
	gap: 50px;
	.image-wrapper {
		padding-bottom: 60%;
		position: relative;
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
