<script setup>
import { reactive } from 'vue';

import { Button, Input, Title } from '@/shared/ui';

const formErrors = reactive({
	nameError: false,
	phoneError: false
});
const formValues = reactive({
	nameValue: '',
	phoneValue: ''
});
</script>

<template>
	<div class="order-form container">
		<form>
			<Title variant="h3"> Оставить заявку </Title>
			<div class="inputs">
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
				<Button variant="primary">Отправить</Button>
			</div>
		</form>
	</div>
</template>

<style lang="scss" scoped>
.order-form {
	padding-top: 102px;
	padding-bottom: 130px;
	display: flex;
	justify-content: center;
	form {
		max-width: 932px;
		width: 100%;
		padding: 54px 116px 66px;
		background: var(--sky-4-color);
		border-radius: 8px;
		.inputs {
			display: grid;
			grid-template-columns: 1fr 0.6fr 0.6fr;
			gap: 10px;
			align-items: flex-end;
			margin-top: 47px;
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
					border: 1px solid var(--blue-color);
					&::placeholder {
						color: #afafaf;
					}
				}
			}
		}
	}
}
</style>
