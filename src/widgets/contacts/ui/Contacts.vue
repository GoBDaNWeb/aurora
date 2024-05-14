<script setup>
import { Map } from '@/entities/map';

import { TelegramIcon, VkIcon, WhatsappIcon } from '@/shared/icons';
import { Title } from '@/shared/ui';

defineProps(['mapCoords', 'mapId']);
</script>

<template>
	<div class="contacts container">
		<Title variant="h3">Контакты</Title>
		<div class="contacts-content">
			<div class="info">
				<a href="tel:8 800 000-00-00" class="phone">8 800 000-00-00</a>
				<a href="mailto:info@product.ru" class="mail">info@product.ru</a>
				<a href="#" class="secondary requisites">Реквизиты</a>
			</div>

			<div class="socials">
				<a href="#" target="_blank"><VkIcon /></a>
				<a href="#" target="_blank"><TelegramIcon /></a>
				<a href="#" target="_blank"><WhatsappIcon /></a>
			</div>
			<div class="map-wrapper">
				<Map :coords="mapCoords" :id="mapId" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.contacts {
	margin-top: 104px;
	@media (max-width: $tab) {
		margin-top: 60px;
	}
	.contacts-content {
		display: grid;
		grid-template-columns: 0.4fr 1fr;
		gap: 50px;
		margin-top: 60px;
		grid-template-areas: 'info map' 'socials map';
		@media (max-width: $desktop-sm) {
			grid-template-columns: 0.6fr 1fr;
		}
		@media (max-width: $tab) {
			grid-template-columns: 1fr;
			margin-top: 30px;
			gap: 36px;
			grid-template-areas: 'info info' 'map map' 'socials socials';
		}
		.info {
			display: flex;
			flex-direction: column;
			grid-area: info;
			.phone {
				font-weight: 400;
				font-size: 34px;
				line-height: 41px;
				@media (max-width: $tab) {
					font-size: 24px;
					line-height: 29px;
				}
			}
			.mail {
				margin-top: 30px;
				font-size: 16px;
				line-height: 22px;
				color: var(--green-2-color);
				@media (max-width: $tab) {
					margin-top: 15px;
					font-size: 14px;
					line-height: 19px;
				}
			}
			.requisites {
				margin-top: 30px;
				font-size: 22px;
				line-height: 30px;
				display: flex;
				align-items: center;
				justify-content: center;
				max-width: 200px;
				@media (max-width: $tab) {
					margin-top: 15px;
					font-size: 14px;
					line-height: 19px;
				}
			}
		}
		.socials {
			display: flex;
			align-items: flex-end;
			gap: 15px;
			grid-area: socials;
			@media (max-width: $tab) {
				justify-content: center;
			}
			a {
				width: 56px;
				height: 56px;
				@media (max-width: $tab) {
					width: 48px;
					height: 48px;
				}
				svg {
					width: 100%;
					height: 100%;
				}
			}
		}
		.map-wrapper {
			padding-bottom: 50%;
			position: relative;
			border-radius: 8px;
			overflow: hidden;
			box-shadow: var(--shadow);
			grid-area: map;
			@media (max-width: $pre-mob) {
				padding-bottom: 125%;
			}
			& > div {
				position: absolute;
			}
		}
	}
}
</style>
