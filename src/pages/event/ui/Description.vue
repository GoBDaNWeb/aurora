<script setup>
import { Title } from '@/shared/ui';
</script>

<template>
	<div class="description container">
		<Title variant="h3">Описание</Title>
		<div class="description-inner">
			<div class="left">
				<span>
					Отметьте свой День рождения незабываемо и оригинально на борту роскошной яхты или
					стильного катера!
				</span>
				<p>
					Представьте себя среди водной глади, где вас и ваших близких окружают только бесконечное
					небо и широкие просторы. Расслабьтесь и наслаждайтесь шумом волн, свежим воздухом и
					бесподобными видами, делая ваш праздник по-настоящему особенным.
				</p>
			</div>
			<div class="center">
				<div class="image-wrapper">
					<img src="/images/event/description.jpg" alt="" />
				</div>
			</div>
			<div class="right">
				<div class="event-info">
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
		</div>
	</div>
</template>

<style lang="scss" scoped>
.description {
	margin-top: 106px;
	.description-inner {
		margin-top: 73px;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 50px;
		.left {
			display: flex;
			flex-direction: column;
			gap: 45px;
			span {
				font-weight: 400;
				font-size: 22px;
				line-height: 30px;
			}
			p {
				font-weight: 400;
				font-size: 16px;
				line-height: 22px;
			}
		}
		.center {
			.image-wrapper {
				padding-bottom: 75%;
				position: relative;
				border-radius: 8px;
				overflow: hidden;
				img {
					position: absolute;
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}
		}
		.right {
			.event-info {
				border-radius: 8px;
				background: var(--sky-4-color);
				padding: 30px 40px;
				display: grid;
				grid-template-columns: repeat(2, 1fr);
				gap: 15px;
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
							background: var(--blue-color);
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
	}
}
</style>
