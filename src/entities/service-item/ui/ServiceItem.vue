<script setup>
defineProps(['service']);
</script>

<template>
	<div class="service-item">
		<div class="image-wrapper">
			<img :src="service.img" alt="service" />
		</div>
		<div class="service-content">
			<span>{{ service.title }}</span>
			<p>{{ service.text }}</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.service-item {
	display: flex;
	gap: 18px;
	border-radius: 9px;
	background: var(--white-color);
	padding: 18px;
	width: fit-content;
	max-height: 130px;
	min-width: 340px;
	.image-wrapper {
		min-width: 96px;
		min-height: 96px;
		max-width: 96px;
		max-height: 96px;
		border-radius: 8px;
		overflow: hidden;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	.service-content {
		display: flex;
		flex-direction: column;
		gap: 5px;
		width: 100%;
		span {
			font-weight: 600;
			font-size: 22px;
			line-height: 28px;
		}
		p {
			color: var(--gray-dark-color);
			font-weight: 500;
			font-size: 16px;
			line-height: 20px;
			max-width: 150px;
		}
	}
}
</style>
