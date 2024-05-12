<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { onMounted, ref, watch } from 'vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

const props = defineProps([
	'prev',
	'next',
	'navigation',
	'pagination',
	'spaceBetween',
	'slidesPerView',
	'breakpoints',
	'centeredSlides',
	'loop',
	'allowTouchMove',
	'setSwiperRef',
	'autoplay',
	'customClass',
	'fade',
	'paginationType',
	'speed'
]);

const modules = ref(
	props.fade ? [Navigation, Pagination, Autoplay, EffectFade] : [Navigation, Pagination, Autoplay]
);

const autoplayObj = props.autoplay
	? {
			delay: props.autoplay,
			disableOnInteraction: false
		}
	: {
			delay: 1000000000,
			disableOnInteraction: false
		};
</script>

<template>
	<Swiper
		:centeredSlides="centeredSlides"
		:spaceBetween="spaceBetween"
		:slidesPerView="slidesPerView"
		:navigation="{
			prevEl: prev,
			nextEl: next
		}"
		:pagination="{
			el: pagination,
			clickable: true,
			type: paginationType ? paginationType : 'bullets'
		}"
		:autoplay="autoplayObj"
		:speed="speed ? speed : 600"
		:modules="modules"
		:class="`${customClass ? customClass : 'swiper'}`"
		@swiper="setSwiperRef"
		:breakpoints="breakpoints"
		:loop="loop"
		:allowTouchMove="allowTouchMove"
		:effect="fade ? 'fade' : null"
	>
		<slot></slot>
	</Swiper>
</template>
