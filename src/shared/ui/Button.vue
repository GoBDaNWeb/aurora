<script setup>
const props = defineProps(['title', 'variant', 'click', 'type', 'disabled']);
</script>

<template>
	<button :type="type" :class="[variant]" @click="click" :disabled="disabled">
		<slot></slot>
	</button>
</template>

<style lang="scss">
@import '@/shared/styles/vars';

button {
	a {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
}
button.primary {
	background: var(--gold-color);
	border-radius: 8px;
	height: 48px;
	padding: 0 30px;
	text-align: center;
	font-weight: 500;
	font-size: 16px;
	line-height: 19px;
	color: var(--white-color);
	transition: var(--trs-300);
	&:hover {
		background: var(--gold-hover-color);
	}
}
button.secondary {
	background: var(--green-2-color);
	border-radius: 8px;
	height: 48px;
	padding: 0 30px;
	text-align: center;
	font-weight: 500;
	font-size: 16px;
	line-height: 19px;
	color: var(--white-color);
	transition: var(--trs-300);
	&:hover {
		background: var(--green-color);
	}
}
button.outline {
	border: 1px solid var(--gold-color);
	border-radius: 8px;
	height: 48px;
	padding: 0;
	text-align: center;
	font-weight: 500;
	font-size: 16px;
	line-height: 19px;
	color: var(--gold-color);
	transition: var(--trs-300);
	&:hover {
		border-color: var(--gold-hover-color);
		color: var(--gold-hover-color);
	}
}
</style>
