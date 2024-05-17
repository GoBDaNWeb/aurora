<script setup>
import { computed, ref } from 'vue';

import { ClearIcon, SortIcon } from '@/shared/icons';
import { Button } from '@/shared/ui';

const props = defineProps(['options', 'modelValue', 'placeholder', 'error', 'name']);

const isActive = ref(null);

const handleOpenSelect = () => {
	isActive.value = !isActive.value;
};
</script>

<template>
	<div class="filters" :class="`${isActive ? 'active' : ''}`">
		<Button class="filters-btn" type="button" @click="handleOpenSelect">
			<p><SortIcon />{{ placeholder }}</p>
			<img src="/images/arrow-sort.svg" alt="" />
		</Button>

		<div class="filters-content">
			<slot></slot>
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

.filters.active {
	button {
		border-radius: 8px 8px 0 0;

		img {
			transform: rotate(180deg);
		}
	}
	.filters-content {
		opacity: 1;
		pointer-events: all;
		transform: translateY(0);
	}
}
.filters.error {
	.selector-btn {
	}
}
.filters {
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
	.filters-btn {
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
		color: var(--green-color);
		border-radius: 8px;
		background: var(--green-light-2-color);
		transition: all var(--trs-300);
		height: 50px;
		p {
			display: flex;
			align-items: center;
			gap: 8px;
		}
		img {
			transition: all var(--trs-300);
		}
	}

	.filters-content {
		z-index: 2;
		position: absolute;
		background: var(--green-light-2-color);
		border-radius: 0 0 8px 8px;
		min-width: 100%;
		opacity: 0;
		transform: translateY(-20%);
		pointer-events: none;
		transition: var(--trs-300);
		padding: 20px;
	}
}
</style>
