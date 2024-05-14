<script setup>
import { SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';

import { Swiper } from '@/widgets/swiper';

import { LikeIcon } from '@/shared/icons';
import { Badge } from '@/shared/ui';

import { badges, images } from '../config';

const pagination = ref(null);
const prev = ref(null);
const next = ref(null);
</script>

<template>
	<Swiper
		:slidesPerView="1"
		:centeredSlides="false"
		:prev="prev"
		:next="next"
		:spaceBetween="10"
		:allowTouchMove="true"
		:pagination="pagination"
		:fade="true"
		class="fleet-inner-swiper"
		:breakpoints="{
			0: {
				allowTouchMove: false
			},
			1024: {
				allowTouchMove: true
			}
		}"
	>
		<SwiperSlide v-for="(img, index) in images" :key="index">
			<div class="image-wrapper">
				<img :src="img" alt="boat" />
			</div>
		</SwiperSlide>
		<div class="pagination-wrapper">
			<div class="pagination-inner">
				<div ref="pagination" class="pagination pagination-line"></div>
			</div>
		</div>
		<div class="navigation">
			<div class="btns-wrapper">
				<button ref="prev">
					<img src="/images/arrow-v1-left.svg" alt="arrow" />
				</button>
				<button ref="next">
					<img src="/images/arrow-v1-right.svg" alt="arrow" />
				</button>
			</div>
		</div>
		<div class="like">
			<button>
				<LikeIcon />
			</button>
		</div>
		<div class="badges">
			<Badge v-for="(badge, index) in badges" :key="index">{{ badge }}</Badge>
		</div>
	</Swiper>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.fleet-inner-swiper {
	max-width: 890px;
	width: 100%;
	grid-area: swiper;
	@media (max-width: $tab) {
		max-width: 1024px;
	}
	.swiper-slide {
		opacity: 0 !important;
		transition: opacity var(--trs-300);
	}
	.swiper-slide-active {
		opacity: 1 !important;
	}
	.image-wrapper {
		position: relative;
		padding-bottom: 60%;
		border-radius: 8px;
		overflow: hidden;
		img {
			width: 100%;
			height: 100%;
			position: absolute;
			object-fit: cover;
		}

		.pagination {
			position: absolute;
			bottom: 22px;

			width: 100%;
			padding: 0 20px;
		}
	}
	.pagination-wrapper {
		padding-bottom: 60%;
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		@media (max-width: $tab) {
			display: none;
		}
		.pagination-inner {
			position: absolute;
			bottom: 22px;
			padding: 0 20px;
			width: 100%;
		}
	}
	.navigation {
		padding-bottom: 60%;
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		@media (max-width: $tab) {
			display: none;
		}
		.btns-wrapper {
			display: flex;
			align-items: center;
			gap: 18px;
			position: absolute;
			bottom: 56px;
			right: 20px;
			button {
				background: rgba(255, 255, 255, 0.5);
				border-radius: 999px;
				z-index: 2;
				transition: var(--trs-300);
				&:hover {
					background: var(--white-color);
				}
			}
		}
	}
	.like {
		position: absolute;
		top: 15px;
		left: 15px;
		z-index: 2;
	}
	.badges {
		display: flex;
		flex-direction: column;
		gap: 5px;
		position: absolute;
		top: 15px;
		right: 15px;
		z-index: 2;
		align-items: flex-end;
	}
}
</style>
