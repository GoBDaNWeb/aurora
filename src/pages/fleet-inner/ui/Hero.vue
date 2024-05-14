<script setup>
import HeroContent from './HeroContent.vue';
import HeroSwiper from './HeroSwiper.vue';
import HeroTabs from './HeroTabs.vue';
import { SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';

import { Badge, Button, Title } from '@/shared/ui';
</script>

<template>
	<div class="hero container">
		<HeroSwiper />
		<HeroTabs />
		<HeroContent />
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.hero {
	display: grid;
	grid-template-columns: 1fr 0.45fr;
	grid-template-areas: 'swiper content' 'tabs content';
	gap: 50px;
	margin-top: 80px;
	@media (max-width: $tab) {
		grid-template-areas: 'swiper swiper' 'content content' 'tabs tabs';
		margin-top: 40px;
		gap: 20px;
	}
}
</style>
