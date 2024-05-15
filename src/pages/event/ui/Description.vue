<script setup>
import { Title } from '@/shared/ui';
</script>

<template>
	<div class="description container">
		<Title variant="h3">Описание</Title>
		<div class="description-inner">
			<div class="description-item">
				<div class="image-wrapper">
					<img src="/images/descr1.svg" alt="icon" />
				</div>
				<p>
					Представьте себя среди водной глади, где вас и ваших близких окружают только бесконечное
					небо и широкие просторы. Расслабьтесь и наслаждайтесь шумом волн, свежим воздухом и
					бесподобными видами, делая ваш праздник по-настоящему особенным.
				</p>
			</div>
			<div class="description-item">
				<div class="image-wrapper">
					<img src="/images/descr2.svg" alt="icon" />
				</div>
				<p>
					Представьте себя среди водной глади, где вас и ваших близких окружают только бесконечное
					небо и широкие просторы. Расслабьтесь и наслаждайтесь шумом волн, свежим воздухом и
					бесподобными видами, делая ваш праздник по-настоящему особенным.
				</p>
			</div>
			<div class="description-item">
				<div class="image-wrapper">
					<img src="/images/descr3.svg" alt="icon" />
				</div>
				<p>
					Представьте себя среди водной глади, где вас и ваших близких окружают только бесконечное
					небо и широкие просторы. Расслабьтесь и наслаждайтесь шумом волн, свежим воздухом и
					бесподобными видами, делая ваш праздник по-настоящему особенным.
				</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.description {
	margin-top: 106px;
	@media (max-width: $tab) {
		margin-top: 62px;
	}
	.description-inner {
		margin-top: 73px;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 50px;
		@media (max-width: $desktop-sm) {
			gap: 25px;
		}
		@media (max-width: $tab) {
			grid-template-columns: repeat(1, 1fr);
		}
		.description-item {
			background: var(--green-light-2-color);
			border-radius: 8px;
			padding: 42px 42px 70px;
			display: grid;
			grid-template-rows: 0.4fr 1fr;
			align-items: center;
			gap: 37px;
			@media (max-width: $tab) {
				padding: 30px 15px 40px;
			}
			.image-wrapper {
				display: flex;
				justify-content: center;
			}
			p {
				font-weight: 400;
				font-size: 16px;
				line-height: 22px;
				@media (max-width: $tab) {
					font-size: 14px;
					line-height: 19px;
				}
			}
		}
	}
}
</style>
