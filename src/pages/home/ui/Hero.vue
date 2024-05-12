<script setup>
import { OrderForm } from '@/features/order-form';

import { Title } from '@/shared/ui';
</script>

<template>
	<div class="hero">
		<div class="hero-text container">
			<Title variant="h1">Аренда яхт и катеров</Title>
			<p>для незабываемых мероприятий на воде</p>
		</div>
		<div class="hero-form">
			<div class="hero-form-wrapper container">
				<OrderForm />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.hero {
	.hero-text {
		margin-top: 115px;
		display: flex;
		flex-direction: column;
		align-items: center;
		@media (max-width: $tab) {
			margin-top: 36px;
		}
		h1 {
			@media (max-width: $mob) {
				max-width: 250px;
			}
		}
		p {
			font-weight: 400;
			font-size: 22px;
			line-height: 26px;
			margin-top: 16px;
			text-align: center;
			@media (max-width: $tab) {
				font-size: 14px;
				line-height: 19px;
				margin-top: 20px;
			}
			@media (max-width: $mob) {
				max-width: 180px;
			}
		}
	}
	.hero-form {
		background-image: url('../images/home/hero.jpg');
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		height: 540px;
		display: flex;
		align-items: flex-end;
		padding-bottom: 54px;
		margin-top: 70px;
		@media (max-width: $tab) {
			margin-top: 35px;
			height: auto;
			background-image: url('../images/home/hero-mob.jpg');
			background-position: top;
		}
		.hero-form-wrapper {
			width: 100%;
			display: flex;
			justify-content: center;
			@media (max-width: $tab) {
				padding-top: 200px;
			}
		}
	}
}
</style>
