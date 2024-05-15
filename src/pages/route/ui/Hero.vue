<script setup>
import { Button, Title, useOrderModalStore } from '@/shared/ui';

const orderModal = useOrderModalStore();
</script>

<template>
	<div class="hero container">
		<Title variant="h3">Маршрут 1</Title>
		<div class="hero-content">
			<div class="image-block">
				<div class="image-wrapper">
					<img src="/images/routes/route-about.jpg" alt="" />
				</div>
			</div>
			<div class="text-block">
				<ul>
					<li>
						<span>2 часа 30 мин</span>
						<p>Продолжительность</p>
					</li>
					<li>
						<span>Маршрут</span>
						<p>Фонтанка + Мойка + Зимняя канавка + Нева</p>
					</li>
					<li>
						<span>Особенности</span>
						<p>однопалубный теплоход со свободной рассадкой и отправлением каждые 30 минут</p>
					</li>
					<li>
						<span>Атмосфера</span>
						<p>экскурсия от гида на русском языке</p>
					</li>
					<li>
						<span>Отправление</span>
						<p>причал на Фонтанке у Аничкова моста</p>
					</li>
				</ul>
				<Button variant="primary" @click="orderModal.handleOpenModal">Забронировать</Button>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.hero {
	margin-top: 67px;
	@media (max-width: $tab) {
		margin-top: 40px;
	}
	.hero-content {
		display: grid;
		grid-template-columns: 1fr 0.4fr;
		gap: 50px;
		margin-top: 60px;
		@media (max-width: $tab) {
			grid-template-columns: 1fr;
			margin-top: 25px;
			gap: 32px;
		}
		.image-block {
			.image-wrapper {
				border-radius: 8px;
				overflow: hidden;
				padding-bottom: 55%;
				position: relative;
				img {
					position: absolute;
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}
		}
		.text-block {
			display: flex;
			flex-direction: column;
			gap: 45px;
			ul {
				display: flex;
				flex-direction: column;
				gap: 22px;
				li {
					display: flex;
					flex-direction: column;
					gap: 10px;
					span {
						font-weight: 700;
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
		}
	}
}
</style>
