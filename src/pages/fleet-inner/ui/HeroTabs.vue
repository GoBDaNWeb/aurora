<script setup>
import { onMounted, reactive, ref } from 'vue';

import { Tab, Title } from '@/shared/ui';

import { tabs, tabsContent } from '../config';

const currentTab = reactive({ tab: 0 });
const handleSelectTab = index => {
	currentTab.tab = index;
};
</script>

<template>
	<div class="hero-tabs">
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
		<div class="tabs-content">
			<div class="content" v-for="(content, index) in tabsContent" :key="index">
				<p v-if="currentTab.tab === content.tab">{{ content.text }}</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.hero-tabs {
	display: flex;
	flex-direction: column;
	gap: 53px;
	grid-area: tabs;
	@media (max-width: $tab) {
		margin-top: 15px;
		gap: 35px;
	}
	.tabs {
		display: flex;
		gap: 40px;
		border-bottom: 1px solid rgba(0, 0, 0, 0.3);
		width: fit-content;
		@media (max-width: $tab) {
			gap: 20px;
		}
	}
	.tabs-content {
		.content {
			p {
				font-size: 16px;
				line-height: 19px;
				@media (max-width: $tab) {
					font-size: 14px;
					line-height: 16px;
				}
			}
		}
	}
}
</style>
