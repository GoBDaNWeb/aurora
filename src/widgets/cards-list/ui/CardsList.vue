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
@import '@/shared/styles/vars';

.cards-list-wrapper {
	margin-top: 48px;
	margin-bottom: 112px;
	@media (max-width: $tab) {
		margin-top: 30px;
	}
	.cards-list {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		column-gap: 50px;
		row-gap: 80px;
		@media (max-width: $tab) {
			grid-template-columns: repeat(2, 1fr);
			gap: 40px;
		}
		@media (max-width: $tab-sm) {
			grid-template-columns: repeat(1, 1fr);
		}
	}
	.btn-wrapper {
		display: flex;
		justify-content: center;
		margin-top: 68px;
	}
}
</style>
