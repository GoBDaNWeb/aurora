<script setup>
import { SwiperSlide } from 'swiper/vue';
import { reactive, ref } from 'vue';

import { Swiper } from '@/widgets/swiper';

import { BoatCard } from '@/entities/boat-card';

import { Tab, Title } from '@/shared/ui';

const props = defineProps(['title', 'boats', 'tabs']);

const currentTab = reactive({ tab: 0 });
const currentBoats = ref(props.boats);

const pagination = ref(null);

const handleSelectTab = index => {
	currentTab.tab = index;
	const filteredBoats = props.boats.filter(boat => {
		return boat.tabs.includes(index.toString());
	});
	currentBoats.value = [...filteredBoats];
};
</script>

<template>
	<div class="boats container">
		<Title variant="h3">{{ title }}</Title>
		<div class="tabs-wrapper container" v-if="tabs">
			<div class="tabs">
				<Tab
					v-for="tab in tabs"
					:key="tab.tab"
					@click="handleSelectTab(tab.tab)"
					:isActive="currentTab.tab === tab.tab"
				>
					{{ tab.title }}
				</Tab>
			</div>
		</div>
		<Swiper
			:slidesPerView="3"
			:centeredSlides="false"
			:prev="null"
			:next="null"
			:spaceBetween="50"
			:allowTouchMove="true"
			:loop="false"
			:pagination="pagination"
			customClass="boats-swiper"
			:breakpoints="{
				0: {
					slidesPerView: 1.3,
					spaceBetween: 30
				},
				767: {
					slidesPerView: 2.3,
					spaceBetween: 20,
					spaceBetween: 30
				},
				1024: {
					slidesPerView: 2.3,
					spaceBetween: 50
				},
				1280: {
					slidesPerView: 3,
					spaceBetween: 50
				}
			}"
		>
			<SwiperSlide v-for="(boat, index) in currentBoats" :key="index">
				<BoatCard :boat="boat" />
			</SwiperSlide>
		</Swiper>
		<div ref="pagination" class="swiper-pagination"></div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.boats {
	margin-top: 100px;
	overflow: hidden;

	@media (max-width: $tab) {
		margin-top: 65px;
	}
	.tabs-wrapper {
		display: flex;
		justify-content: center;
		margin-top: 65px;
		@media (max-width: $tab) {
			margin-top: 27px;
		}
		.tabs {
			border-bottom: 1px solid rgba(0, 0, 0, 0.3);
			display: flex;
			gap: 40px;
		}
	}
	.boats-swiper {
		margin-top: 60px;
		overflow: visible;
		@media (max-width: $tab) {
			margin-top: 32px;
		}
	}
	.swiper-pagination {
		margin-top: 30px;
	}
}
</style>
