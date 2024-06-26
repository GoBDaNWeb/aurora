<script setup>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { reactive } from 'vue';

import { ClearIcon, SortIcon } from '@/shared/icons';
import { Button, Input, Tab } from '@/shared/ui';

import { filters, tabs } from '../config';

const format = date => {
	const day = date.getDate();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();

	return `${day}.${month}.${year}`;
};

const filterTab = reactive({ tab: 0 });

const formErrors = reactive({
	fromCostError: false,
	upToCostError: false,
	fromCapacityError: false,
	upToCapacityError: false,
	dateError: false
});
const formValues = reactive({
	fromCostValue: '',
	upToCostValue: '',
	fromCapacityValue: '',
	upToCapacityValue: '',
	dateValue: ''
});

const handleSelectFilterTab = index => {
	filterTab.tab = index;
};
</script>

<template>
	<div class="fleet-filters">
		<div class="filters-tabs">
			<Tab
				v-for="tab in filters.tabs"
				:key="tab.tab"
				variant="button"
				@click="handleSelectFilterTab(tab.tab)"
				:isActive="filterTab.tab === tab.tab"
			>
				{{ tab.title }}
			</Tab>
		</div>
		<div class="filters-inputs">
			<div class="input-wrapper">
				<p>Цена за час</p>
				<div class="inputs">
					<Input
						v-model="formValues.fromCostValue"
						:error="formErrors.fromCostError"
						type="text"
						placeholder="от 10 000"
					/>
					<Input
						v-model="formValues.upToCostValue"
						:error="formErrors.upToCostError"
						type="text"
						placeholder="до 45 000"
					/>
				</div>
			</div>
			<div class="input-wrapper">
				<p>Вместимость</p>
				<div class="inputs">
					<Input
						v-model="formValues.fromCapacityValue"
						:error="formErrors.fromCapacityError"
						type="text"
						placeholder="от 4"
					/>
					<Input
						v-model="formValues.upToCapacityValue"
						:error="formErrors.upToCapacityError"
						type="text"
						placeholder="от 15"
					/>
				</div>
			</div>
			<div class="input-wrapper">
				<p>Дата</p>
				<div class="inputs">
					<VueDatePicker
						:format="format"
						placeholder="03.04.24"
						v-model="formValues.dateValue"
						auto-apply
						:time-picker="false"
						:class="formErrors.dateError ? 'error' : ''"
					>
						<template #input-icon> </template>
					</VueDatePicker>
				</div>
			</div>
		</div>
		<div class="filters-sort">
			<Button><SortIcon />Стоимость <img src="/images/arrow-sort.svg" alt="" /></Button>
		</div>
	</div>
</template>

<style lang="scss">
.fleet-filters {
	.filters-inputs {
		.input-wrapper {
			.inputs {
				.dp__input_wrap {
					input {
						border: none;
						border: 1px solid var(--green-2-color);
						border-radius: 10px;
						padding: 19px 24px;
						height: 50px;
					}
					.dp__input_icon {
						padding: 0;
						right: 19px;
						left: auto;
						width: 28px;
						height: 21px;
						top: 24px;
					}
					input::placeholder {
						color: #afafaf;
						opacity: 1;
					}
					.dp__clear_icon {
						display: none;
					}
				}
			}
		}
	}
}
</style>
<style lang="scss" scoped>
@import '@/shared/styles/vars';

.fleet-filters {
	margin-top: 60px;
	@media (max-width: $tab) {
		margin-top: 30px;
	}
	.filters-tabs {
		display: flex;
		align-items: center;
		gap: 20px;
		flex-wrap: wrap;
		@media (max-width: $tab-sm) {
			flex-direction: column;
			gap: 10px;
			.tab {
				width: 100%;
			}
		}
	}
	.filters-inputs {
		display: flex;
		align-items: center;
		gap: 70px;
		margin-top: 32px;
		max-width: 885px;
		@media (max-width: $tab-sm) {
			margin-top: 30px;
			flex-direction: column;
			gap: 30px;
			align-items: flex-start;
		}
		.input-wrapper {
			display: flex;
			flex-direction: column;
			gap: 15px;
			p {
				font-weight: 400;
				font-size: 16px;
				line-height: 19px;
			}
			.inputs {
				display: flex;
				align-items: center;
				gap: 10px;
				input {
					border: 1px solid var(--green-2-color) !important;
					&::placeholder {
						color: #afafaf;
					}
				}
			}
		}
	}
	.filters-sort {
		margin-top: 16px;
		@media (max-width: $tab-sm) {
			display: none;
		}
		button {
			background: var(--green-light-2-color) !important;
			color: var(--green-color);
			width: 177px;
			height: 48px;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 8px;
			gap: 8px;
			font-weight: 400;
			font-size: 16px;
			line-height: 19px;
		}
	}
}
</style>
