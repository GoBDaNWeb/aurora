<script setup>
import { SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';

import { Swiper } from '@/widgets/swiper';

import { ServiceItem } from '@/entities/service-item';

import { Title } from '@/shared/ui';

const props = defineProps(['title', 'text', 'services']);

const totalServices = ref([
	...props.services.topLine,
	...props.services.centerLine,
	...props.services.bottomLine
]);
const pagination = ref(null);
</script>

<template>
	<div class="service">
		<div class="service-text containert">
			<Title variant="h3" v-html="title"></Title>
			<p v-if="text">{{ text }}</p>
		</div>
		<div class="service-list-wrapper">
			<div class="service-list">
				<div class="top-line">
					<ServiceItem
						v-for="(service, index) in services.topLine"
						:key="index"
						:service="service"
					/>
					<ServiceItem
						v-for="(service, index) in services.topLine"
						:key="index"
						:service="service"
					/>
				</div>
				<div class="center-line">
					<ServiceItem
						v-for="(service, index) in services.centerLine"
						:key="index"
						:service="service"
					/>
					<ServiceItem
						v-for="(service, index) in services.centerLine"
						:key="index"
						:service="service"
					/>
				</div>
				<div class="bottom-line">
					<ServiceItem
						v-for="(service, index) in services.bottomLine"
						:key="index"
						:service="service"
					/>
					<ServiceItem
						v-for="(service, index) in services.bottomLine"
						:key="index"
						:service="service"
					/>
				</div>
			</div>
		</div>
		<div class="service-swiper-wrapper">
			<Swiper
				:slidesPerView="2"
				:centeredSlides="false"
				:prev="null"
				:next="null"
				:spaceBetween="20"
				:allowTouchMove="true"
				:loop="false"
				:pagination="pagination"
				customClass="service-swiper"
				:breakpoints="{
					0: {
						slidesPerView: 1.15,
						spaceBetween: 10
					},
					767: {
						slidesPerView: 2.3,
						spaceBetween: 20
					}
				}"
			>
				<SwiperSlide v-for="(service, index) in totalServices" :key="index">
					<ServiceItem :service="service" />
				</SwiperSlide>
			</Swiper>
			<div ref="pagination" class="swiper-pagination blue"></div>
		</div>
		<div class="service-border">
			<img src="/images/service-border.svg" alt="" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.service {
	background: var(--green-light-color);
	padding-bottom: 130px;
	position: relative;
	overflow: hidden;
	@media (max-width: $tab) {
		padding-bottom: 37px;
	}
	.service-border {
		position: absolute;
		bottom: 26px;
		overflow: hidden;
		@media (max-width: $tab) {
			display: none;
		}
	}
	.service-text {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 80px;
		@media (max-width: $tab) {
			padding-top: 50px;
		}
		p {
			font-weight: 500;
			font-size: 24px;
			line-height: 28px;
			font-family: 'ElMessiri', sans-serif;
			text-align: center;
			@media (max-width: $tab) {
				font-size: 20px;
				line-height: 24px;
				max-width: 220px;
				margin-top: 6px;
			}
		}
	}
	.service-list-wrapper {
		overflow: hidden;
		margin-top: 30px;
		@media (max-width: $tab) {
			display: none;
		}
		.service-list {
			animation: scroll 35s linear infinite;
			.top-line {
				display: flex;
				align-items: center;
				justify-content: center;
				.service-item {
					&:nth-child(4n + 1) {
						margin-right: 77px;
					}
					&:nth-child(4n + 2) {
						margin-right: 627px;
					}
					&:nth-child(4n + 3) {
						margin-right: 143px;
					}
					&:nth-child(4n + 4) {
						margin-right: 77px;
					}
				}
			}
			.center-line {
				display: flex;
				align-items: center;
				margin-top: 25px;
				margin-bottom: -25px;
				.service-item {
					&:nth-child(4n + 1) {
						margin-right: 365px;
					}
					&:nth-child(4n + 2) {
						margin-right: 365px;
					}
					&:nth-child(4n + 3) {
						margin-right: 365px;
					}
					&:nth-child(4n + 4) {
						margin-right: 365px;
					}
				}
			}
			.bottom-line {
				display: flex;
				align-items: center;
				margin-left: -335px;

				.service-item {
					&:nth-child(4n + 1) {
						margin-right: 360px;
					}
					&:nth-child(4n + 2) {
						margin-right: 360px;
					}
					&:nth-child(4n + 3) {
						margin-right: 360px;
					}
					&:nth-child(4n + 4) {
						margin-right: 360px;
					}
				}
			}
		}
	}
	.service-swiper-wrapper {
		display: none;
		padding: 0 15px;
		margin-top: 40px;
		@media (max-width: $tab) {
			display: block;
		}
		.service-swiper {
			overflow: visible;
			.swiper-slide {
				.service-item {
					max-width: 100%;
					width: 100%;
					min-width: 100%;
				}
			}
		}
		.swiper-pagination {
			margin-top: 19px;
		}
	}
}
</style>
