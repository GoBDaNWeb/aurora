<script setup>
import { ref } from 'vue';

const props = defineProps(['variant']);

const Tag = ref(props.variant);
</script>

<template>
	<Tag :class="`title-${variant}`"><slot></slot></Tag>
</template>

<style lang="scss">
@import '@/shared/styles/vars';

.title-h1 {
	font-family: 'ElMessiri', sans-serif;
	font-weight: 500;
	font-size: 80px;
	line-height: 88px;
	text-align: center;
	@media (max-width: $tab) {
		font-size: 45px;
		line-height: 49px;
	}
}
.title-h3 {
	font-family: 'ElMessiri', sans-serif;

	font-weight: 500;
	font-size: 65px;
	line-height: 72px;
	text-align: center;
	@media (max-width: $tab) {
		font-size: 30px;
		line-height: 36px;
	}
}
.title-h4 {
	font-family: 'ElMessiri', sans-serif;

	font-weight: 500;
	font-size: 34px;
	line-height: 40px;
	text-align: center;
	text-transform: uppercase;
	@media (max-width: $tab) {
		font-size: 30px;
		line-height: 33px;
	}
}
.title-h5 {
	font-family: 'ElMessiri', sans-serif;

	font-weight: 500;
	font-size: 24px;
	line-height: 28px;
	text-transform: uppercase;
}
.title-h6 {
	font-family: 'ElMessiri', sans-serif;

	font-weight: 500;
	font-size: 20px;
	line-height: 23px;
	text-transform: uppercase;
	@media (max-width: $tab) {
		font-size: 16px;
		line-height: 18px;
	}
}
</style>
