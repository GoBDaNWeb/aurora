<script setup>
import { useWindowSize } from '@vueuse/core';
import { SwiperSlide } from 'swiper/vue';
import { ref, watch } from 'vue';

import { Swiper } from '@/widgets/swiper';

import  RouteAboutCard  from './RouteAboutCard.vue';

import { Title } from '@/shared/ui';

const pagination = ref(null);
const prev = ref(null);
const next = ref(null);
const swiperRef = ref(null);

const { width } = useWindowSize();

const setSwiperRef = swiper => {
	swiperRef.value = swiper;
};

defineProps(['routes']);

watch(
	() => width.value,
	() => {
		swiperRef.value.pagination.disable();
		swiperRef.value.pagination.enable();
		swiperRef.value.pagination.update();
	}
);
</script>

<template>
	<div class="routes">
		<div class="routes-inner container">
			<Title variant="h3">Маршруты </Title>
			<Swiper
				:slidesPerView="1"
				:centeredSlides="false"
				:prev="prev"
				:next="next"
				:spaceBetween="10"
				:allowTouchMove="true"
				:loop="false"
				:pagination="pagination"
				:setSwiperRef="setSwiperRef"
				customClass="routes-swiper"
				:paginationType="width <= 1024 ? 'bullets' : 'fraction'"
				:speed="800"
				:breakpoints="{
					0: {
						slidesPerView: 1.15,
						spaceBetween: 25
					},
					767: {
						slidesPerView: 1,
						spaceBetween: 10
					}
				}"
			>
				<SwiperSlide v-for="(route, index) in routes" :key="index">
					<RouteAboutCard :route="route" />
				</SwiperSlide>
			</Swiper>
		</div>
		<div class="border">
			<img src="/images/route-border.svg" alt="" />
		</div>
		<div class="navigaion-wrapper">
			<button ref="prev"><img src="/images/arrow-v3-left.svg" alt="" /></button>
			<div
				ref="pagination"
				class="pagination"
				:class="width <= 1024 ? 'swiper-pagination' : 'pagination-number'"
			></div>
			<button ref="next"><img src="/images/arrow-v3-right.svg" alt="" /></button>
		</div>
		<div class="pagination-wrapper"></div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.routes {
	margin-top: 105px;
	position: relative;
	overflow: hidden;
	@media (max-width: $tab) {
		margin-top: 60px;
	}
	.routes-swiper {
		margin-top: 60px;
		@media (max-width: $tab) {
			margin-top: 30px;
		}
		.swiper-slide {
			opacity: 0 !important;
			transition: var(--trs-600);
			@media (max-width: $tab-sm) {
				opacity: 1 !important;
			}
		}
		.swiper-slide-active {
			opacity: 1 !important;
		}
	}
	.border {
		margin-top: 37px;
		position: relative;
		display: flex;
		justify-content: center;
		@media (max-width: $tab) {
			display: none;
		}
		img {
			margin-right: 100px;
		}
	}
	.navigaion-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 14px;
		width: 100%;
		margin-top: 42px;

		button.swiper-button-disabled {
			opacity: 0;
		}
		button {
			transition: var(--trs-300);
			@media (max-width: $tab) {
				display: none;
			}
			img {
				width: 58px;
			}
		}
	}
}
</style>
