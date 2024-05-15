<script setup>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { reactive } from 'vue';

import { Button, Input, Title } from '@/shared/ui';
import { format } from '@/shared/utils';

const formErrors = reactive({
	nameError: false,
	phoneError: false,
	dateError: false,
	commentError: false
});
const formValues = reactive({
	nameValue: '',
	phoneValue: '',
	dateValue: '',
	commentValue: ''
});
</script>

<template>
	<div class="order-form container">
		<form>
			<Title variant="h3"> Оставить заявку </Title>
			<div class="inputs">
				<div class="inputs-top">
					<label>
						<p>Имя</p>
						<Input
							v-model="formValues.nameValue"
							:error="formErrors.nameError"
							type="text"
							placeholder="Имя"
						/>
					</label>
					<label>
						<p>Телефон</p>
						<Input
							v-model="formValues.phoneValue"
							:error="formErrors.phoneError"
							type="tel"
							placeholder="Телефон"
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
			</div>
		</form>
	</div>
</template>

<style lang="scss">
.order-form {
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
</style>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.order-form {
	padding-top: 102px;
	padding-bottom: 130px;
	display: flex;
	justify-content: center;
	@media (max-width: $tab) {
		padding-top: 54px;
		padding-bottom: 93px;
		background: var(--green-light-2-color);
	}
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 1274px;
		width: 100%;
		padding: 54px 116px 66px;
		background: var(--green-light-2-color);
		border-radius: 8px;
		@media (max-width: $tab) {
			padding: 0;
		}
		.inputs {
			display: flex;
			flex-direction: column;
			gap: 32px;
			margin-top: 47px;
			max-width: 841px;
			@media (max-width: $tab-sm) {
				width: 100%;
			}
			.inputs-top {
				display: grid;
				grid-template-columns: 1fr 0.6fr 0.6fr 0.6fr;
				gap: 10px;
				align-items: flex-end;
				@media (max-width: $tab-sm) {
					grid-template-columns: 1fr;
					gap: 30px;
				}
			}
			.inputs-bottom {
				display: grid;
				grid-template-columns: 1fr 0.26fr;
				gap: 10px;
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
						color: #afafaf;
					}
				}
			}
		}
	}
}
</style>
