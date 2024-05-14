<script setup>
import { reactive } from 'vue';

import { Tab, Title } from '@/shared/ui';

import { tabs } from '../config';

const currentTab = reactive({ tab: 0 });

const handleSelectTab = index => {
	currentTab.tab = index;
};
</script>

<template>
	<div class="hero container">
		<Title variant="h3">Мероприятия</Title>
		<div class="tabs-wrapper">
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
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.hero {
	margin-top: 67px;
	@media (max-width: $tab) {
		margin-top: 40px;
	}
	.tabs-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 70px;
		@media (max-width: $tab) {
			margin-top: 30px;
		}
		.tabs {
			border-bottom: 1px solid rgba(0, 0, 0, 0.3);
			display: flex;
			gap: 40px;
		}
	}
}
</style>
