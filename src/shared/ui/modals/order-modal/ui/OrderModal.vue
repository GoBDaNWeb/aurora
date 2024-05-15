<script setup>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { reactive, watch } from 'vue';

import { CloseIcon } from '@/shared/icons';
import { Button, Input, Title } from '@/shared/ui';
import { format } from '@/shared/utils';

import { useOrderModalStore } from '../model';

const orderModal = useOrderModalStore();

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

watch(
	() => orderModal.isActive,
	() => {
		if (orderModal.isActive) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.removeAttribute('style');
		}
	}
);
</script>

<template>
	<transition name="modal">
		<div class="order-modal" v-if="orderModal.isActive" @click.stop="orderModal.handleOpenModal">
			<div class="order-modal-content" @click.stop>
				<Button class="close-btn" @click.stop="orderModal.handleOpenModal"><CloseIcon /></Button>
				<Title variant="h4">Забронировать</Title>
				<div class="inputs">
					<Input
						v-model="formValues.nameValue"
						:error="formErrors.nameError"
						type="text"
						placeholder="Имя"
					/>
					<Input
						v-model="formValues.phoneValue"
						:error="formErrors.phoneError"
						type="tel"
						placeholder="Телефон"
					/>
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
					<Input
						v-model="formValues.commentValue"
						:error="formErrors.commentError"
						type="text"
						placeholder="Комментарий"
					/>
					<Button variant="primary">Отправить</Button>
				</div>
			</div>
		</div>
	</transition>
</template>

<style lang="scss">
@import '@/shared/styles/vars';

.order-modal {
	.dp__input_wrap {
		input {
			border: none;
			border-radius: 10px;
			padding: 19px 24px;
			background: var(--green-light-2-color);
			height: 64px;
			@media (max-width: $tab) {
				height: 50px;
			}
			&::placeholder {
				color: rgba(32, 60, 63, 0.8);
			}
		}
		.dp__input_icon {
			padding: 0;
			right: 19px;
			left: auto;
			width: 28px;
			height: 21px;
			top: 24px;
		}

		.dp__clear_icon {
			display: none;
		}
	}
}
</style>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.order-modal {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: rgba(242, 233, 229, 0.5);
	backdrop-filter: blur(15px);
	transition: var(--trs-300);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 150;
	.order-modal-content {
		max-width: 557px;
		border-radius: 8px;
		background: var(--white-color);
		padding: 50px 30px;
		position: relative;
		width: 100%;
		transition: var(--trs-300);
		margin: 0 20px;
		@media (max-width: $tab) {
			padding: 20px 20px 40px;
		}
		@media (max-width: $pre-mob) {
			margin: 0;
		}
		.close-btn {
			position: absolute;
			top: 13px;
			right: 13px;
		}
		h4 {
			text-transform: none;
			text-align: left;
		}
		.inputs {
			display: flex;
			flex-direction: column;
			gap: 24px;
			margin-top: 55px;
			input {
				background: var(--green-light-2-color);
				height: 64px;
				@media (max-width: $tab) {
					height: 50px;
				}
				&::placeholder {
					color: rgba(32, 60, 63, 0.8);
				}
			}
			button {
				height: 64px;
				@media (max-width: $tab) {
					height: 50px;
				}
			}
		}
	}
}
.modal-enter-active,
.modal-leave-active {
	transition: var(--trs-300);
}

.modal-enter-from,
.modal-leave-to {
	opacity: 0;
	.order-modal-content {
		transform: translateY(100%);
	}
}
</style>
