<script setup>
import { RouterLink } from 'vue-router';

import { Button, Title } from '@/shared/ui';

defineProps(['route']);
</script>

<template>
	<div class="route-card">
		<div class="image-wrapper">
			<img :src="route.img" alt="image" />
		</div>
		<div class="content">
			<div class="text-content">
				<Title variant="h5">{{ route.title }}</Title>
				<span>{{ route.duration }}</span>
				<p>
					{{ route.text }}
				</p>
			</div>

			<Button variant="outline"><RouterLink :to="route.url">Подробнее</RouterLink></Button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.route-card {
	display: flex;
	flex-direction: column;
	.image-wrapper {
		position: relative;
		padding-bottom: 63%;
		border-radius: 8px;
		overflow: hidden;
		img {
			position: absolute;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	.content {
		flex: 1;
		margin-top: 20px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		span {
			font-weight: 500;
			font-size: 16px;
			line-height: 22px;
			display: block;
			margin-top: 15px;
		}
		p {
			margin-top: 15px;
			font-weight: 400;
			font-size: 16px;
			line-height: 22px;
		}
		button {
			margin-top: 20px;
			max-width: 200px;
			width: 100%;
		}
	}
}
</style>
