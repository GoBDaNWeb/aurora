<script setup>
import { ref } from 'vue';

import { Badge, Button, Title } from '@/shared/ui';
</script>

<template>
	<div class="hero-content">
		<Title variant="h3">Veneto</Title>
		<Title variant="h4">Прогулочный <br />катер-лимузин</Title>
		<div class="info">
			<p class="price">25 000 <span>₽ / час</span></p>
			<span class="guests">До 10 гостей</span>
			<ul>
				<li>
					<span>Причал</span>
					<p>Ждановская наб., 2А</p>
				</li>
				<li>
					<span>Маршрут</span>
					<p>Реки и каналы, Нева, Малая и большая Невка, Финский залив</p>
				</li>
			</ul>
			<Button variant="primary">Забронировать</Button>
		</div>
		<div class="fleet-info">
			<div class="boat-roomtour">
				<img src="/images/boat.svg" alt="" />
				<div class="roomtour-item">
					<span>3</span>
					<p>каюты</p>
				</div>
				<div class="roomtour-item">
					<span>6</span>
					<p>
						спальных <br />
						мест
					</p>
				</div>
			</div>
			<ul class="boat-info">
				<li>Флайбридж</li>
				<li>Теплые пледы</li>
				<li>Кухня с посудой, чаем, кофе</li>
				<li>Аудиосистема</li>
			</ul>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';
.hero-content {
	grid-area: content;
	h3 {
		text-align: left;
		text-transform: none;
		@media (max-width: $tab) {
			font-size: 45px;
			line-height: 54px;
		}
	}
	h4 {
		text-align: left;
		text-transform: none;
	}
	.info {
		margin-top: 60px;
		@media (max-width: $tab) {
			margin-top: 20px;
		}
		.price {
			font-weight: 700;
			font-size: 24px;
			line-height: 28px;
			margin-bottom: 15px;

			span {
				font-weight: 400;
				font-size: 16px;
				line-height: 19px;
				@media (max-width: $tab) {
					font-size: 14px;
					line-height: 16px;
				}
			}
		}
		.guests {
			font-weight: 400;
			font-size: 16px;
			line-height: 22px;
			display: block;
			margin-top: 15px;
			@media (max-width: $tab) {
				font-size: 14px;
				line-height: 19px;
			}
		}
		ul {
			display: flex;
			margin-top: 15px;
			flex-direction: column;
			gap: 15px;

			li {
				display: grid;
				grid-template-columns: 0.3fr 1fr;
				gap: 20px;
				span {
					font-weight: 500;
					font-size: 16px;
					line-height: 22px;
					@media (max-width: $tab) {
						font-size: 14px;
						line-height: 19px;
					}
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
		button {
			margin-top: 26px;
			@media (max-width: $pre-mob) {
				max-width: 100%;
				width: 100%;
			}
		}
	}
	.fleet-info {
		border-radius: 8px;
		background: var(--green-light-2-color);
		padding: 30px 40px;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 15px;
		margin-top: 61px;
		@media (max-width: $tab) {
			padding: 20px;
		}
		.boat-roomtour {
			display: flex;
			flex-direction: column;
			gap: 24px;
			img {
				width: 96px;
				height: 40px;
			}
			.roomtour-item {
				display: flex;
				align-items: center;
				gap: 10px;
				span {
					font-weight: 700;
					font-size: 50px;
					line-height: 60px;
				}
				p {
					font-weight: 400;
					font-size: 16px;
					line-height: 19px;
					@media (max-width: $tab) {
						font-size: 14px;
						line-height: 16px;
					}
				}
			}
		}
		.boat-info {
			display: flex;
			flex-direction: column;
			gap: 20px;
			li {
				position: relative;
				padding-left: 20px;
				font-weight: 400;
				font-size: 16px;
				line-height: 19px;
				&:before {
					content: '';
					width: 2px;
					height: 2px;
					border-radius: 999px;
					background: var(--green-color);
					position: absolute;
					margin: auto;
					top: 0;
					bottom: 0;
					left: 0;
				}
			}
		}
	}
}
</style>
