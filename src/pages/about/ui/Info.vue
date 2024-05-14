<script setup>
import { Title } from '@/shared/ui';
</script>

<template>
	<div class="about-info">
		<div class="about-info-inner container">
			<div class="about-info-item">
				<Title variant="h4">Миссия</Title>
				<p>
					Маршрут начинается у Патриаршего моста и ведет мимо Кремля, Парка Горького, до Москва-Сити
					и обратно. Во время круиза гости могут наслаждаться комфортом на борту и красивыми видами
					городской архитектуры.
				</p>
			</div>
			<div class="about-info-item">
				<Title variant="h4">Наша команда</Title>
				<p>
					Маршрут начинается у Патриаршего моста и ведет мимо Кремля, Парка Горького, до Москва-Сити
					и обратно. Во время круиза гости могут наслаждаться комфортом на борту и красивыми видами
					городской архитектуры.
				</p>
			</div>
			<div class="image-wrapper">
				<img src="/images/logo-sm-2.png" alt="" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.about-info {
	height: 468px;
	background: var(--green-2-color);
	padding: 40px 0;
	display: flex;
	align-items: center;
	@media (max-width: $tab) {
		height: auto;
	}
	.about-info-inner {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		align-items: center;
		gap: 113px;
		@media (max-width: $tab) {
			grid-template-columns: repeat(1, 1fr);
			gap: 50px;
		}
		.about-info-item {
			display: flex;
			flex-direction: column;
			gap: 10px;
			&:nth-child(1) {
				@media (max-width: $tab) {
					order: 1;
				}
			}
			&:nth-child(2) {
				@media (max-width: $tab) {
					order: 2;
				}
			}
			h4 {
				color: var(--white-color);
				text-transform: none;
				text-align: left;
			}
			p {
				font-size: 16px;
				line-height: 22px;
				color: var(--white-color);
				@media (max-width: $tab) {
					font-size: 14px;
					line-height: 19px;
				}
			}
		}
		.image-wrapper {
			padding-bottom: 100%;
			position: relative;
			@media (max-width: $tab) {
				order: 0;
				width: 115px;
				height: 97px;
				padding-bottom: 0;
				margin: auto;
			}
			img {
				width: 100%;
				height: 100%;
				position: absolute;
				object-fit: cover;
			}
		}
	}
}
</style>
