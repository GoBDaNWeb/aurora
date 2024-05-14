<script setup>
import { Title } from '@/shared/ui';
</script>

<template>
	<div class="hero container">
		<Title variant="h3">О компании</Title>
		<div class="hero-content">
			<div class="image-wrapper">
				<img src="/images/about/hero.jpg" alt="image" />
			</div>
			<div class="text">
				<p>
					Аврора Yachts предлагает эксклюзивные водные путешествия на яхтах и катерах, предоставляя
					возможность каждому клиенту почувствовать себя особенным. Наш флот состоит из современных
					и хорошо оборудованных судов, обеспечивающих комфорт и безопасность во время каждого
					путешествия. Мы гордимся нашей внимательностью к деталям и стремлению к совершенству, что
					позволяет нам создавать незабываемые впечатления для наших гостей.
				</p>
				<div class="adventures">
					<div class="adventure-item">
						<span>6</span>
						<p>Пояснение цифры</p>
					</div>
					<div class="adventure-item">
						<span>50%</span>
						<p>Пояснение цифры</p>
					</div>
					<div class="adventure-item">
						<span>100+</span>
						<p>Пояснение цифры</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.hero {
	margin-top: 67px;
	margin-bottom: 105px;

	@media (max-width: $tab) {
		margin-top: 40px;
	}
	.hero-content {
		display: grid;
		grid-template-columns: 0.45fr 1fr;
		gap: 50px;
		margin-top: 70px;
		@media (max-width: $tab) {
			grid-template-columns: 1fr;
			gap: 30px;
			margin-top: 35px;
		}
		.image-wrapper {
			position: relative;
			padding-bottom: 100%;
			border-radius: 8px;
			overflow: hidden;
			@media (max-width: $tab) {
				padding-bottom: 60%;
			}
			img {
				width: 100%;
				height: 100%;
				position: absolute;
				object-fit: cover;
			}
		}
		.text {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			gap: 30px;
			overflow: hidden;
			p {
				font-weight: 400;
				font-size: 16px;
				line-height: 22px;
				@media (max-width: $tab) {
					font-size: 14px;
					line-height: 19px;
				}
			}
			.adventures {
				display: grid;
				grid-template-columns: repeat(3, 1fr);
				gap: 50px;
				@media (max-width: $tab) {
					overflow: auto;
					gap: 10px;
					overflow: auto;
					scrollbar-width: thin;
					scrollbar-color: rgba(73, 84, 104, 0) rgba(0, 0, 0, 0);
					&::-webkit-scrollbar {
						height: 0px;
					}
				}
				.adventure-item {
					border-radius: 8px;
					background: var(--green-light-2-color);
					padding: 42px 25px;
					display: flex;
					flex-direction: column;
					gap: 10px;
					@media (max-width: $tab) {
						min-width: 197px;
						padding: 18px 25px;
					}
					span {
						font-weight: 700;
						font-size: 50px;
						line-height: 60px;
					}
					p {
						font-weight: 400;
						font-size: 16px;
						@media (max-width: $tab) {
							font-size: 14px;
							line-height: 16px;
						}
					}
				}
			}
		}
	}
}
</style>
