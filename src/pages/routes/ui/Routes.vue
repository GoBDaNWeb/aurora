<script setup>
import Hero from './Hero.vue';

import { CardsList } from '@/widgets/cards-list';

import { RouteCard } from '@/entities/route-card';

import { routes } from '../config';
</script>

<template>
	<main class="routes-page">
		<Hero />
		<CardsList :haveBtn="true">
			<RouteCard v-for="(route, index) in routes" :key="index" :route="route" />
		</CardsList>
	</main>
</template>

<style lang="scss" scoped></style>
