<script setup>
import RouteItem from './RouteItem.vue';
import { onMounted, reactive, ref } from 'vue';

import { Tab, Title } from '@/shared/ui';

import { routes, routesTabs } from '../config';

const currentTab = reactive({ tab: 0 });

const handleSelectTab = index => {
	currentTab.tab = index;
};
</script>

<template>
	<div class="routes container">
		<Title variant="h3">Доступные марштуры</Title>
		<div class="tabs">
			<Tab
				v-for="tab in routesTabs"
				:key="tab.tab"
				@click="handleSelectTab(tab.tab)"
				:isActive="currentTab.tab === tab.tab"
			>
				{{ tab.title }}
			</Tab>
		</div>
		<div class="tabs-content">
			<div class="content" v-for="(route, index) in routes" :key="index">
				<RouteItem v-if="route.tab === currentTab.tab" :route="route" />
			</div>
		</div>
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
}
</style>
