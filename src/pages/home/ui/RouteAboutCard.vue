<script setup>
import { RouterLink } from 'vue-router';

import { Button, Title } from '@/shared/ui';

defineProps(['route']);
</script>

<template>
	<div class="route-about-card">
		<div class="left">
			<div class="image-wrapper">
				<img :src="route.img" alt="" />
			</div>
		</div>
		<div class="right">
			<div class="text">
				<Title variant="h4">{{ route.title }}</Title>
				<p>
					{{ route.text }}
				</p>
				<Button variant="outline"><RouterLink :to="route.url">Подробнее</RouterLink></Button>
			</div>
			<div class="image-wrapper">
				<img :src="route.icon" alt="" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.route-about-card {
	display: grid;
	grid-template-columns: 0.8fr 1fr;
	gap: 45px;
	@media (max-width: $tab) {
		grid-template-columns: 1fr;
		gap: 20px;
	}
	.left {
		.image-wrapper {
			padding-bottom: 65%;
			position: relative;
			border-radius: 8px;
			overflow: hidden;
			@media (max-width: $tab) {
				padding-bottom: 50%;
			}
			img {
				position: absolute;
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
	}
	.right {
		display: grid;
		grid-template-columns: 0.5fr 1fr;
		gap: 50px;
		@media (max-width: $tab) {
			grid-template-columns: 1fr 1fr;
		}
		@media (max-width: $tab-sm) {
			grid-template-columns: 1fr;
		}
		.text {
			min-width: 226px;
			h4 {
				text-align: left;
				text-transform: none;
			}
			p {
				margin-top: 15px;
				font-weight: 400;
				font-size: 16px;
				line-height: 22px;
				@media (max-width: $tab) {
					font-size: 14px;
					line-height: 19px;
				}
			}
			button {
				width: 100%;
				margin-top: 15px;
			}
		}
		.image-wrapper {
			padding-bottom: 85%;
			position: relative;
			@media (max-width: $tab-sm) {
				display: none;
			}
			img {
				position: absolute;
				width: 100%;
				height: 100%;
				object-fit: contain;
			}
		}
	}
}
</style>
