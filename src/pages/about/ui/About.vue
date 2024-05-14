<script setup>
import Hero from './Hero.vue';
import Info from './Info.vue';

import { Contacts } from '@/widgets/contacts';
</script>

<template>
	<main class="about-page">
		<Hero />
		<Info />
		<Contacts :mapCoords="[55.9179448791719, 37.75662745707157]" mapId="map" />
	</main>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.about-page {
	margin-bottom: 156px;
	@media (max-width: $tab) {
		margin-bottom: 123px;
	}
}
</style>
