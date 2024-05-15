<script setup>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { onMounted, reactive, watch } from 'vue';

import { Button, Input, Select } from '@/shared/ui';
import { format } from '@/shared/utils';

const selectList = [
	{ value: 'значение1', label: 'значение 1' },
	{ value: 'значение2', label: 'значение 2' },
	{ value: 'значение3', label: 'значение 3' },
	{ value: 'значение4', label: 'значение 4' }
];

const formErrors = reactive({
	typeError: false,
	quantityError: false,
	budgetError: false,
	dateError: false
});
const formValues = reactive({
	typeValue: '',
	quantityValue: '',
	budgetValue: '',
	dateValue: ''
});
</script>

<template>
	<form class="order-form">
		<label>
			<p>Тип мероприятия</p>
			<Select
				v-model="formValues.typeValue"
				:options="selectList"
				name="type"
				:error="formErrors.typeError"
				:placeholder="'Выберите'"
			/>
		</label>
		<label>
			<p>Кол. человек</p>
			<Input
				v-model="formValues.quantityValue"
				:error="formErrors.quantityError"
				type="text"
				placeholder="Кол-во чел."
			/>
		</label>
		<label>
			<p>Бюджет до (₽)</p>
			<Input
				v-model="formValues.budgetValue"
				:error="formErrors.budgetError"
				type="text"
				placeholder="Бюджет"
			/>
		</label>
		<label>
			<p>Дата</p>
			<VueDatePicker
				:format="format"
				placeholder="Дата"
				v-model="formValues.dateValue"
				auto-apply
				:time-picker="false"
				:class="formErrors.dateError ? 'error' : ''"
			>
				<template #input-icon> </template>
			</VueDatePicker>
		</label>

		<Button variant="primary">Подробнее</Button>
	</form>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.order-form {
	display: grid;
	grid-template-columns: 1fr 0.55fr 0.55fr 0.55fr 0.7fr;
	align-items: flex-end;
	gap: 10px;
	max-width: 844px;
	width: 100%;
	@media (max-width: $tab) {
		grid-template-columns: 1fr;
		gap: 20px;
	}
	label {
		p {
			color: var(--white-color);
			font-size: 16px;
			font-weight: 400;
			line-height: 22px;
			margin-bottom: 15px;
			@media (max-width: $tab) {
				font-size: 14px;
				line-height: 19px;
				margin-bottom: 8px;
			}
		}
	}
}
</style>
