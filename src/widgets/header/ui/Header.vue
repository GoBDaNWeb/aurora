<script setup>
import { RouterLink } from 'vue-router';

import { PATH_PAGE } from '@/shared/config';
import { BurgerIcon, HeartIcon, TelegramIcon, UserIcon, WhatsappIcon } from '@/shared/icons';
import { Button, useMenuStore } from '@/shared/ui';

import { routes } from '../config';

const menuStore = useMenuStore();
</script>

<template>
	<header class="header">
		<div class="header-inner container">
			<RouterLink :to="PATH_PAGE.home" class="logo">
				<img src="/images/logo.png" alt="logo" />
			</RouterLink>
			<nav>
				<RouterLink v-for="route in routes" :key="route.title" :to="route.url">
					{{ route.title }}
				</RouterLink>
			</nav>
			<div class="info">
				<a href="tel:+7 (800) 750-50-00" class="phone-mob">
					<img src="/images/phone.svg" alt="" />
				</a>
				<a href="tel:+7 (800) 750-50-00" class="tel">+7 (800) 750-50-00</a>
				<div class="socials">
					<a href="#"><TelegramIcon /></a>
					<a href="#"><WhatsappIcon /></a>
				</div>
				<Button variant="primary">Подобрать судно</Button>
				<div class="features">
					<a href="#"><HeartIcon /></a>
					<a href="#"><UserIcon /></a>
				</div>
				<Button class="burger" @click="menuStore.handleOpenMenu()"><BurgerIcon /></Button>
			</div>
		</div>
		<div class="header-border">
			<img src="/images/header-border.svg" alt="border" />
		</div>
	</header>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.header {
	height: 88px;
	position: relative;
	overflow: hidden;
	position: sticky;
	top: 0;
	background: var(--white-color);
	z-index: 150;
	@media (max-width: $tab) {
		height: 60px;
	}
	.header-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 100%;
		.logo {
			width: 165px;
			height: 36px;
			margin-bottom: 15px;
			@media (max-width: $tab) {
				width: 135px;
				height: 30px;
			}
			img {
				width: 100%;
				height: 100%;
			}
		}
		nav {
			display: flex;
			align-items: center;
			gap: 25px;
			flex: 1;
			margin-left: 50px;
			margin-bottom: 15px;
			@media (max-width: $desktop-md-2) {
				display: none;
			}
			a {
				font-weight: 600;
				font-size: 14px;
				line-height: 16px;
			}
		}
		.info {
			display: flex;
			align-items: center;
			gap: 20px;
			margin-bottom: 15px;
			.phone-mob {
				display: none;
				@media (max-width: $desktop-md-2) {
					display: block;
				}
			}
			.features,
			.socials {
				display: flex;
				align-items: center;
				gap: 15px;
				@media (max-width: $desktop-md-2) {
					display: none;
				}
				a {
					height: 24px;
					width: 24px;

					svg {
						width: 100%;
						height: 100%;
					}
				}
			}
			.tel {
				font-size: 14px;
				line-height: 16px;
				font-weight: 600;
				@media (max-width: $desktop-md-2) {
					display: none;
				}
			}
			button {
				height: 39px;
				@media (max-width: $desktop-md-2) {
					display: none;
				}
			}
			.left {
			}
			.right {
				display: flex;
				align-items: center;
				gap: 13px;
			}
			.burger {
				display: none;
				@media (max-width: $desktop-md-2) {
					display: block;
				}
			}
		}
	}
	.header-border {
		position: absolute;
		bottom: 0;
		width: 100vw;
		img {
			width: 100%;
			height: 11px;
			object-fit: cover;
			@media (max-width: $tab) {
				height: 6px;
			}
		}
	}
}
</style>
