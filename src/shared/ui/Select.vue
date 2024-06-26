<script setup>
import { computed, ref } from 'vue';

const props = defineProps(['options', 'modelValue', 'placeholder', 'error', 'name']);
const selected = ref(null);
const isActive = ref(null);
const selectedValue = ref('');

const emit = defineEmits(['update:modelValue']);
const value = computed({
	get: () => props.modelValue,
	set: val => emit('update:modelValue', val)
});

defineExpose({ value });

const handleOpenSelect = () => {
	isActive.value = !isActive.value;
};
const handleCloseSelect = () => {
	isActive.value = false;
};

const handleSelectValue = index => {
	selectedValue.value = props.options[index].label;
	isActive.value = false;
};
</script>

<template>
	<div
		class="selector"
		@mouseleave="handleCloseSelect"
		:class="`${isActive ? 'active' : ''} ${error ? 'error' : ''}`"
	>
		<button type="button" @click="handleOpenSelect" class="selector-btn">
			<p>{{ selectedValue ? selectedValue : placeholder }}</p>
			<span>
				<svg
					width="11"
					height="7"
					viewBox="0 0 11 7"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M1 1.62524L5.5 5.62524L10 1.62524" stroke="black" stroke-width="2" />
				</svg>
			</span>
		</button>
		<div class="selector-content">
			<div class="selector-list">
				<label @click="handleSelectValue(index)" v-for="(option, index) in options" :key="index">
					<input
						type="radio"
						@input="$emit('update:modelValue', option.value)"
						value="{{option.value}}"
						:name="name"
					/>
					<span>{{ option.label }}</span>
				</label>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.selector.active {
	z-index: 120 !important;
}
</style>
<style lang="scss" scoped>
@import '@/shared/styles/vars';

.selector.active {
	button {
		span {
			transform: rotate(180deg);
		}
	}
	.selector-content {
		opacity: 1;
		pointer-events: all;
		transform: translateY(0);
	}
}
.selector.error {
	.selector-btn {
	}
}
.selector {
	outline: none;
	width: 100%;
	transition: all var(--trs-300);
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 150%;
	box-sizing: border-box;
	position: relative;
	z-index: 100;
	@media (max-width: $tab) {
		min-width: 100%;
	}
	.selector-btn {
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		padding: 0 20px;
		justify-content: space-between;
		align-items: center;
		z-index: 3;
		margin-top: 0;
		gap: 20px;
		color: var(--black-color);
		border-radius: 8px;
		background: var(--white-color);
		height: 50px;
		p {
			font-weight: 400;
			font-size: 16px;
			line-height: 22px;
			color: var(--black-color);
			font-family: 'Vremena Grotesk', sans-serif;
		}
		span {
			transition: var(--trs-300);
		}
	}

	.selector-content {
		z-index: 2;
		position: absolute;
		background: #fff;
		min-width: 100%;
		opacity: 0;
		transform: translateY(-20%);
		pointer-events: none;
		transition: var(--trs-300);
		box-shadow: var(--shadow);
		padding: 25px;
		border-radius: 10px;

		.selector-list {
			display: flex;
			flex-direction: column;
			gap: 15px;
			label {
				display: flex;
				align-items: center;
				gap: 10px;
				cursor: url('../images/cursor-pointer.png'), auto;
				transition: var(--trs-300);

				input {
					display: none;
				}
				span {
					// color: #626262;
					font-size: 16px;
					font-weight: 400;
					line-height: 22px;
					transition: var(--trs-300);
				}
			}
		}
	}
}
</style>
