<script setup>
import { SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

import { Swiper } from '@/widgets/swiper';

import { LikeIcon } from '@/shared/icons';
import { Badge, Button, Title } from '@/shared/ui';

defineProps(['boat']);

const pagination = ref(null);
const prev = ref(null);
const next = ref(null);
</script>

<template>
	<div class="boat-card">
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
			<SwiperSlide v-for="(img, index) in boat.imgs" :key="index">
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
				<Badge v-for="(badge, index) in boat.badges" :key="index">{{ badge }}</Badge>
			</div>
		</Swiper>

		<div class="content">
			<p class="price">{{ boat.price }} <span>₽ / час</span></p>
			<Title variant="h5" v-html="boat.title"></Title>
			<span class="guests">{{ boat.guests }}</span>
			<ul>
				<li v-for="(info, index) in boat.info" :key="index">
					<span>{{ info.title }}</span>
					<p>{{ info.text }}</p>
				</li>
			</ul>
			<div class="btns">
				<Button variant="outline"><RouterLink :to="boat.url">Подробнее</RouterLink></Button>
				<Button variant="primary">Забронировать</Button>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.boat-card {
	position: relative;

	.swiper {
		max-width: 420px;
		.swiper-slide {
			opacity: 0 !important;
			transition: opacity var(--trs-300);
		}
		.swiper-slide-active {
			opacity: 1 !important;
		}
		.image-wrapper {
			position: relative;
			padding-bottom: 65%;
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
			padding-bottom: 65%;
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
			padding-bottom: 65%;
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
	.content {
		margin-top: 20px;
		.price {
			font-weight: 700;
			font-size: 24px;
			line-height: 28px;
			margin-bottom: 15px;

			span {
				font-weight: 400;
				font-size: 16px;
				line-height: 19px;
				@media (max-width: $tab) {
					font-size: 14px;
					line-height: 16px;
				}
			}
		}
		h5 {
			text-transform: none;
		}
		.guests {
			font-weight: 400;
			font-size: 16px;
			line-height: 22px;
			display: block;
			margin-top: 15px;
			@media (max-width: $tab) {
				font-size: 14px;
				line-height: 19px;
			}
		}
		ul {
			display: flex;
			margin-top: 15px;
			flex-direction: column;
			gap: 15px;

			li {
				display: grid;
				grid-template-columns: 0.3fr 1fr;
				gap: 20px;
				span {
					font-weight: 500;
					font-size: 16px;
					line-height: 22px;
					@media (max-width: $tab) {
						font-size: 14px;
						line-height: 19px;
					}
				}
				p {
					font-weight: 400;
					font-size: 16px;
					line-height: 22px;
					@media (max-width: $tab) {
						font-size: 14px;
						line-height: 19px;
					}
				}
			}
		}
		.btns {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 20px;
			margin-top: 20px;
			@media (max-width: $tab) {
				grid-template-columns: repeat(1, 1fr);
			}
		}
	}
}
</style>
