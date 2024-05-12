<script setup>
import { reactive } from 'vue';

import { ClearIcon } from '@/shared/icons';
import { Button, Tab, Title } from '@/shared/ui';

import { tabs } from '../config';

const currentTab = reactive({ tab: 0 });
const tabsList = reactive({
	tabs: []
});

const handleSelectTab = index => {
	if (!tabsList.tabs.includes(index)) {
		tabsList.tabs.push(index);

		const filterTabs = tabsList.tabs.filter((tab, index, self) => {
			return self.indexOf(tab) === index;
		});
		tabsList.tabs = [...filterTabs];
	} else {
		const filterTabs = tabsList.tabs.filter(tab => {
			return tab !== index;
		});
		tabsList.tabs = [...filterTabs];
	}
};

const isActiveTab = index => {
	return tabsList.tabs.includes(index);
};

const clearTabs = () => {
	tabsList.tabs = [];
};
</script>

<template>
	<div class="hero container">
		<Title variant="h3">Маршруты</Title>
		<div class="tabs">
			<Tab
				v-for="tab in tabs"
				:key="tab.tab"
				variant="button"
				@click="handleSelectTab(tab.tab)"
				:isActive="isActiveTab(tab.tab)"
			>
				{{ tab.title }}
			</Tab>
			<Button class="clear" @click="clearTabs"><ClearIcon /></Button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.hero {
	margin-top: 67px;
	.tabs {
		display: flex;
		align-items: center;
		gap: 20px;
		margin-top: 70px;
		.clear {
			width: 48px;
			height: 48px;
			border-radius: 8px;
			border: 1px solid var(--sky-2-color);
			padding: 0;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
}
</style>
