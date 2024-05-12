<script setup>
import { useWindowSize } from '@vueuse/core';
import { SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';

import { Swiper } from '@/widgets/swiper';

import { Fancybox } from '@/widgets/fancybox';

import { Title } from '@/shared/ui';

defineProps(['imgs']);

const { width } = useWindowSize();
const pagination = ref(null);
</script>

<template>
	<div class="gallery">
		<Title variant="h3">Фотогалерея</Title>
		<Fancybox>
			<Swiper
				v-if="width <= 1024"
				:slidesPerView="1.4"
				:centeredSlides="false"
				:prev="null"
				:next="null"
				:spaceBetween="30"
				:allowTouchMove="true"
				:loop="false"
				:pagination="pagination"
				customClass="gallery-swiper"
				:breakpoints="{
					0: {
						slidesPerView: 1.15,
						spaceBetween: 25
					},
					767: {
						slidesPerView: 1.4,
						spaceBetween: 25
					}
				}"
			>
				<SwiperSlide v-for="(img, index) in imgs" :key="index">
					<a
						:href="img"
						class="image-wrapper"
						:class="`cell--${index + 1}`"
						data-fancybox="gallery"
					>
						<img :src="img" alt="" />
					</a>
				</SwiperSlide>
			</Swiper>
			<div class="gallery-list container" v-else>
				<a
					:href="img"
					v-for="(img, index) in imgs"
					:key="index"
					class="image-wrapper"
					:class="`cell--${index + 1}`"
					data-fancybox="gallery"
				>
					<img :src="img" alt="" />
				</a>
			</div>
		</Fancybox>
		<div ref="pagination" class="swiper-pagination"></div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.gallery {
	margin-top: 105px;
	@media (max-width: $tab) {
		margin-top: 60px;
	}
	.gallery-swiper {
		margin-top: 40px;
		padding: 0 15px;
		.swiper-slide {
			.image-wrapper {
				padding-bottom: 125%;
				position: relative;
				display: block;
				border-radius: 8px;
				overflow: hidden;
				img {
					position: absolute;
					width: 100%;
					height: 100%;
					object-fit: cover;
					object-position: center;
				}
			}
		}
	}
	.swiper-pagination {
		margin-top: 20px;
	}
	.gallery-list {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(3, 1fr);
		gap: 30px;
		margin-top: 60px;
		@media (max-width: $desktop-sm) {
			gap: 15px;
		}
		.image-wrapper {
			position: relative;
			border-radius: 8px;
			overflow: hidden;
			display: block;
			img {
				position: absolute;
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
		.cell--1 {
			grid-column: 1 / 1;
			grid-row: 1 / 1;
			padding-bottom: 50%;
		}

		.cell--2 {
			grid-column: 1 / 1;
			grid-row: 2/ 2;
			padding-bottom: 50%;
		}

		.cell--3 {
			grid-column: 2 / 2;
			grid-row: 1 / 3;
			padding-bottom: 50%;
		}

		.cell--4 {
			grid-column: 1 / 3;
			grid-row: 3 /3;
			padding-bottom: 25%;
		}

		.cell--5 {
			grid-column: 3 / 5;
			grid-row: 1 / 1;
			padding-bottom: 35%;
		}

		.cell--6 {
			grid-column: 3 / 3;
			grid-row: 2 / 2;
		}

		.cell--7 {
			grid-column: 3 / 3;
			grid-row: 3 / 3;
		}

		.cell--8 {
			grid-column: 4 / 4;
			grid-row: 2 / 4;
		}
	}
}
</style>
