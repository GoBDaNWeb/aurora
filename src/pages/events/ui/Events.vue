<script setup>
import Hero from './Hero.vue';
import { onMounted, ref } from 'vue';

import { CardsList } from '@/widgets/cards-list';

import { EventCard } from '@/entities/event-card';

import { events } from '../config';
</script>

<template>
	<main class="events-page">
		<Hero />

		<CardsList>
			<EventCard v-for="(event, index) in events" :key="index" :event="event" />
		</CardsList>
	</main>
</template>

<style lang="scss">
@import '@/shared/styles/vars';

.events-page {
	.cards-list-wrapper {
		.cards-list {
			.event-card-wrapper {
				.swiper {
					max-width: 420px;
					padding-bottom: 100%;
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
