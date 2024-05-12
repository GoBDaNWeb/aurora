<script setup>
import { SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

import { Swiper } from '@/widgets/swiper';

import { Button, Title } from '@/shared/ui';

defineProps(['event']);

const pagination = ref(null);
const prev = ref(null);
const next = ref(null);
</script>

<template>
	<div class="event-card-wrapper">
		<Swiper
			:slidesPerView="1"
			:centeredSlides="false"
			:prev="prev"
			:next="next"
			:spaceBetween="10"
			:allowTouchMove="true"
			:pagination="pagination"
			:fade="true"
			:breakpoints="{
				0: {
					allowTouchMove: false
				},
				1024: {
					allowTouchMove: true
				}
			}"
		>
			<SwiperSlide v-for="(img, index) in event.imgs" :key="index">
				<div class="image-wrapper">
					<img :src="img" alt="" />
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
		</Swiper>
		<div class="content">
			<Title variant="h4">
				{{ event.title }}
			</Title>
			<p>
				{{ event.text }}
			</p>
			<Button variant="outline">
				<RouterLink :to="event.url">Подробнее</RouterLink>
			</Button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.event-card-wrapper {
	position: relative;
	.pagination-wrapper {
		padding-bottom: 100%;
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		.pagination-inner {
			position: absolute;
			bottom: 22px;
			padding: 0 20px;
			width: 100%;
			@media (max-width: $tab) {
				display: none;
			}
		}
	}
	.navigation {
		padding-bottom: 100%;
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
	.swiper {
		.swiper-slide {
			opacity: 0 !important;
			transition: opacity var(--trs-300);
		}
		.swiper-slide-active {
			opacity: 1 !important;
		}
		.image-wrapper {
			position: relative;
			padding-bottom: 100%;
			border-radius: 12px;
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
	}
	.content {
		margin-top: 30px;
		@media (max-width: $tab) {
			margin-top: 20px;
		}
		h4 {
			text-transform: none;
			text-align: left;
		}
		p {
			font-weight: 400;
			font-size: 16px;
			line-height: 22px;
			margin-top: 15px;
			@media (max-width: $tab) {
				font-size: 14px;
				line-height: 19px;
			}
		}
		button {
			margin-top: 30px;
			max-width: 192px;
			width: 100%;
			@media (max-width: $tab) {
				margin-top: 20px;
				max-width: 300px;
			}
		}
	}
}
</style>
