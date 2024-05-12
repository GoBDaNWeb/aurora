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

<style lang="scss" scoped></style>
