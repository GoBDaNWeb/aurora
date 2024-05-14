<script setup>
import { SwiperSlide } from 'swiper/vue';
import { onMounted, reactive, ref } from 'vue';

import { Swiper } from '@/widgets/swiper';

import { EventCard } from '@/entities/event-card';

import { Tab, Title } from '@/shared/ui';

const props = defineProps(['title', 'events', 'tabs']);

const currentTab = reactive({ tab: 0 });
const currentEvents = ref(props.events);

const swiperRef = ref(null);
const pagination = ref(null);
const prev = ref(null);
const next = ref(null);
const setSwiperRef = swiper => {
	swiperRef.value = swiper;
};

const handleSelectTab = index => {
	currentTab.tab = index;
	const filteredEvents = props.events.filter(event => {
		return event.tabs.includes(index.toString());
	});
	currentEvents.value = [...filteredEvents];
};
</script>

<template>
	<div class="events">
		<div class="title-wrapper container">
			<Title variant="h3" v-html="title"></Title>
		</div>
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
		<div class="events-swiper-wrapper">
			<Swiper
				:slidesPerView="2"
				:centeredSlides="true"
				:prev="prev"
				:next="next"
				:spaceBetween="155"
				:allowTouchMove="true"
				:setSwiperRef="setSwiperRef"
				:loop="true"
				:pagination="pagination"
				customClass="events-swiper"
				:breakpoints="{
					0: {
						slidesPerView: 1.3,
						loop: false,
						centeredSlides: false,
						spaceBetween: 25
					},
					767: {
						slidesPerView: 1.7,
						loop: false,
						centeredSlides: false,
						spaceBetween: 25
					},
					1024: {
						slidesPerView: 2.1,
						spaceBetween: 155,
						loop: true,
						centeredSlides: true
					},
					1445: {
						slidesPerView: 2.5,
						spaceBetween: 155
					}
				}"
			>
				<SwiperSlide v-for="(event, index) in currentEvents" :key="index">
					<EventCard :event="event" />
				</SwiperSlide>
			</Swiper>
			<div class="navigation">
				<button ref="prev">
					<img src="/images/arrow-v2-left.svg" alt="arrow" />
				</button>
				<button ref="next">
					<img src="/images/arrow-v2-right.svg" alt="arrow" />
				</button>
			</div>
			<div ref="pagination" class="swiper-pagination"></div>
		</div>
	</div>
</template>

<style lang="scss">
@import '@/shared/styles/vars';

.events {
	margin-top: 100px;
	padding-bottom: 100px;
	@media (max-width: $tab) {
		margin-top: 65px;
		padding-bottom: 45px;
		overflow: hidden;
	}
	.tabs-wrapper {
		display: flex;
		justify-content: center;
		margin-top: 65px;
		@media (max-width: $tab) {
			margin-top: 26px;
		}
		.tabs {
			border-bottom: 1px solid rgba(0, 0, 0, 0.3);
			display: flex;
			gap: 40px;
		}
	}
	.events-swiper-wrapper {
		position: relative;
		@media (max-width: $tab) {
			padding: 0 15px;
		}
		.events-swiper {
			margin-top: 57px;
			@media (max-width: $tab) {
				margin-top: 50px;
				overflow: visible;
			}
			& > .swiper-wrapper {
				& > .swiper-slide {
					opacity: 0.5 !important;
					.emoji-wrapper {
						opacity: 0 !important;
					}
				}
				& > .swiper-slide-active {
					opacity: 1 !important;
					.emoji-wrapper {
						opacity: 1 !important;
					}
				}
			}
			.swiper-slide {
				transition: opacity var(--trs-300);
			}
		}
		.navigation {
			position: absolute;
			width: 100%;
			max-width: 58vw;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			margin: 0 auto 150px;
			justify-content: space-between;
			@media (max-width: $tab) {
				display: none;
			}
			button {
				width: 57px;
				height: 57px;
				border: 1px solid var(--black-color);
				background: var(--white-color);
				img {
					width: 20px;
				}
			}
		}
		.swiper-pagination {
			margin-top: 26px;
		}
	}
}
</style>
