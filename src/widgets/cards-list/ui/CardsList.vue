<script setup>
import { Button } from '@/shared/ui';

defineProps(['cards', 'haveBtn']);
</script>

<template>
	<div class="cards-list-wrapper container">
		<div class="cards-list">
			<slot></slot>
		</div>
		<div class="btn-wrapper" v-if="haveBtn">
			<Button variant="secondary">Загрузить ещё</Button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.cards-list-wrapper {
	margin-top: 48px;
	margin-bottom: 112px;
	.cards-list {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		column-gap: 50px;
		row-gap: 80px;
	}
	.btn-wrapper {
		display: flex;
		justify-content: center;
		margin-top: 68px;
	}
}
</style>
