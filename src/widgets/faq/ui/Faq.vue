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
		position: relative;

		@media (max-width: $tab) {
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
	}
}
</style>
