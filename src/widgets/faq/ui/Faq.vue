<script setup>
import { reactive } from 'vue';

import { Accordion, Button, Input, Title } from '@/shared/ui';

const props = defineProps(['questions']);

const questionsList = reactive(props.questions);

const formErrors = reactive({
	nameError: false,
	questionError: false,
	phoneError: false
});
const formValues = reactive({
	nameValue: '',
	questionValue: '',
	phoneValue: ''
});
</script>

<template>
	<div class="faq container">
		<Title variant="h3">Вопросы и ответы</Title>
		<div class="faq-content">
			<div class="faq-list">
				<Accordion :questions="questionsList" />
			</div>
			<form>
				<Title variant="h4">Задать вопрос</Title>
				<div class="form-inputs">
					<Input
						v-model="formValues.nameValue"
						:error="formErrors.nameError"
						type="text"
						placeholder="Имя"
						variant="gray"
					/>
					<Input
						v-model="formValues.questionError"
						type="text"
						placeholder="Ваш вопрос"
						variant="gray"
					/>
					<Input
						v-model="formValues.phoneValue"
						:error="formErrors.phoneError"
						type="tel"
						placeholder="+7"
						variant="gray"
					/>
					<Button variant="primary">Отправить</Button>
				</div>
			</form>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.faq {
	margin-top: 104px;
	@media (max-width: $tab) {
		margin-top: 60px;
	}
	.faq-content {
		margin-top: 60px;
		display: grid;
		grid-template-columns: 1fr 0.5fr;
		gap: 52px;
		position: relative;
		@media (max-width: $desktop-sm) {
			gap: 20px;
			grid-template-columns: 1fr 0.8fr;
		}
		@media (max-width: $tab) {
			grid-template-columns: 1fr;
			gap: 66px;
			margin-top: 34px;
		}
		.faq-list {
			display: flex;
			flex-direction: column;
			gap: 25px;
			@media (max-width: $tab) {
				gap: 15px;
			}
		}
		form {
			border: 1px solid var(--sky-color);
			border-radius: 8px;
			padding: 30px 30px 50px;
			height: fit-content;
			position: sticky;
			top: 100px;
			@media (max-width: $tab) {
				top: 0;
				border-color: rgba(0, 0, 0, 0);
				padding: 0;
			}
			h4 {
				text-transform: none;
				text-align: left;
				@media (max-width: $tab) {
					text-align: center;
				}
			}
			.form-inputs {
				display: flex;
				flex-direction: column;
				gap: 24px;
				margin-top: 40px;
				input {
					height: 64px;
				}
				button {
					width: 100%;
					height: 64px;
				}
			}
		}
	}
}
</style>
