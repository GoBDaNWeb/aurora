<script setup>
defineProps(['isActive', 'variant']);
</script>

<template>
	<button class="tab" :class="`${isActive ? 'active' : ''} ${variant ? variant : ''}`">
		<slot></slot>
	</button>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.tab.active {
	border-color: var(--green-2-color);
	color: var(--green-color);
}
.tab.button.active {
	color: var(--white-color);
	background: var(--green-2-color);
}
.tab.button {
	height: 48px;
	padding: 0 30px;
	border-radius: 8px;
	color: var(--green-2-color);
	background: none;
	border: 1px solid var(--green-2-color);
}
.tab {
	font-weight: 500;
	font-size: 16px;
	line-height: 22px;
	padding-bottom: 18px;
	transition: var(--trs-300);
	color: rgba(0, 0, 0, 0.6);
	white-space: nowrap;
	border-bottom: 4px solid rgba(0, 0, 0, 0);
	@media (max-width: $tab) {
		font-size: 14px;
		line-height: 10px;
	}
}
</style>
