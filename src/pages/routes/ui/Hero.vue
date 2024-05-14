<script setup>
import { reactive } from 'vue';

import { Filters } from '@/features/filters';

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
		<Filters placeholder="Фильтры">
			<div class="filters-tabs">
				<Tab
					v-for="tab in tabs"
					:key="tab.tab"
					variant="button"
					@click="handleSelectTab(tab.tab)"
					:isActive="isActiveTab(tab.tab)"
				>
					{{ tab.title }}
				</Tab>
			</div>
		</Filters>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.hero {
	margin-top: 67px;
	@media (max-width: $tab) {
		margin-top: 40px;
	}
	.tabs {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 20px;
		margin-top: 70px;
		@media (max-width: $tab) {
			margin-top: 30px;
		}
		@media (max-width: $tab-sm) {
			display: none;
		}
		.clear {
			width: 48px;
			height: 48px;
			border-radius: 8px;
			border: 1px solid var(--green-2-color);
			padding: 0;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
	.filters {
		display: none;
		@media (max-width: $tab-sm) {
			display: block;
			margin-top: 30px;
		}
	}
	.filters-tabs {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		column-gap: 15px;
		row-gap: 8px;
	}
}
</style>
