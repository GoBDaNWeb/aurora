<script setup>
import RouteItem from './RouteItem.vue';
import { useWindowSize } from '@vueuse/core';
import { SwiperSlide } from 'swiper/vue';
import { onMounted, reactive, ref } from 'vue';

import { Swiper } from '@/widgets/swiper';

import { Tab, Title } from '@/shared/ui';

import { routes, routesTabs } from '../config';

const currentTab = reactive({ tab: 0 });
const { width } = useWindowSize();
const pagination = ref(null);

const handleSelectTab = index => {
	currentTab.tab = index;
};
</script>

<template>
	<div class="routes container">
		<Title variant="h3">Доступные марштуры</Title>
		<div class="tabs" v-if="width >= 767">
			<Tab
				v-for="tab in routesTabs"
				:key="tab.tab"
				@click="handleSelectTab(tab.tab)"
				:isActive="currentTab.tab === tab.tab"
			>
				{{ tab.title }}
			</Tab>
		</div>
		<div class="tabs-content" v-if="width >= 767">
			<div class="content" v-for="(route, index) in routes" :key="index">
				<RouteItem v-if="route.tab === currentTab.tab" :route="route" />
			</div>
		</div>
		<Swiper
			v-else
			:slidesPerView="1"
			:centeredSlides="false"
			:prev="null"
			:next="null"
			:spaceBetween="10"
			:allowTouchMove="true"
			:loop="false"
			:pagination="pagination"
			customClass="routes-swiper"
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
				<RouteItem :route="route" />
			</SwiperSlide>
		</Swiper>
		<div ref="pagination" class="pagination swiper-pagination"></div>
	</div>
</template>

<style lang="scss" scoped>
.routes {
	margin-top: 120px;
	.tabs {
		display: flex;
		gap: 40px;
		width: fit-content;
		margin-top: 80px;
		border-bottom: 1px solid rgba(0, 0, 0, 0.3);
	}
	.tabs-content {
		margin-top: 56px;
	}
	.routes-swiper {
		margin-top: 30px;
	}
	.pagination {
		margin-top: 30px;
	}
}
</style>
