<script setup>
import Hero from './Hero.vue';

import { CardsList } from '@/widgets/cards-list';

import { BoatCard } from '@/entities/boat-card';

import { boats } from '../config';
</script>

<template>
	<main class="fleet-page">
		<Hero />
		<CardsList :haveBtn="true">
			<BoatCard v-for="(boat, index) in boats" :key="index" :boat="boat" />
		</CardsList>
	</main>
</template>

<style lang="scss">
@import '@/shared/styles/vars';

.fleet-page {
	.cards-list-wrapper {
		.cards-list {
			.boat-card {
				.swiper {
					max-width: 420px;
					padding-bottom: 65%;
					position: relative;
					@media (max-width: $tab) {
						max-width: 480px;
					}
					@media (max-width: $tab-sm) {
						max-width: 767px;
					}
					.swiper-wrapper {
						position: absolute;
					}
					.swiper-slide {
						position: absolute;
					}
				}
			}
		}
	}
}
</style>
