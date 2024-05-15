<script setup>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { onMounted, reactive, watch } from 'vue';

import { Button, Input, Select, Title } from '@/shared/ui';
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
	<div class="order-form">
		<div class="order-form-inner container">
			<div class="text">
				<Title variant="h3">Получить предложение</Title>
				<Title variant="h4">
					Заполните форму, мы подберем для вас лучшее, <br />
					что только может быть
				</Title>
			</div>
			<form>
				<div class="inputs-top">
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
				</div>
				<div class="inputs-bottom">
					<label>
						<p>Комментарий</p>
						<Input
							v-model="formValues.commentValue"
							:error="formErrors.commentError"
							type="text"
							placeholder="Комментарий"
						/>
					</label>

					<Button variant="primary">Отправить</Button>
				</div>
			</form>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.order-form {
	padding-top: 106px;
	padding-bottom: 113px;
	@media (max-width: $tab) {
		background: var(--green-light-2-color);
		padding-top: 58px;
		padding-bottom: 54px;
		margin-top: 64px;
	}
	.order-form-inner {
		display: flex;
		flex-direction: column;
		align-items: center;
		.text {
			display: flex;
			flex-direction: column;
			h4 {
				text-transform: none;
			}
		}
		form {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-top: 40px;
			gap: 32px;
			width: 100%;
			max-width: 841px;
			.inputs-top {
				display: grid;
				grid-template-columns: 1fr 0.55fr 0.55fr 0.55fr 0.7fr;
				align-items: flex-end;
				width: 100%;
				gap: 10px;
				max-width: 844px;
				width: 100%;
				@media (max-width: $tab) {
					grid-template-columns: 1fr;
					gap: 20px;
				}

				label {
					p {
						color: var(--green-color);
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

					input {
						border: 1px solid var(--green-2-color);
						&::placeholder {
							color: var(--green-color);
						}
					}
				}
			}
			.inputs-bottom {
				display: grid;
				grid-template-columns: 1fr 0.26fr;
				gap: 10px;
				width: 100%;
				align-items: flex-end;
				@media (max-width: $tab-sm) {
					grid-template-columns: 1fr;
					gap: 30px;
				}
			}
			label {
				display: flex;
				flex-direction: column;
				gap: 15px;
				p {
					font-weight: 400;
					font-size: 16px;
					line-height: 22px;
				}
				input {
					border: 1px solid var(--green-2-color);
					&::placeholder {
						color: var(--green-color);
					}
				}
			}
		}
	}
}
</style>
