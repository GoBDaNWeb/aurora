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
				<img src="/images/logo.svg" alt="logo" />
			</RouterLink>
			<nav>
				<RouterLink v-for="route in routes" :key="route.title" :to="route.url">
					{{ route.title }}
				</RouterLink>
			</nav>
			<div class="info">
				<div class="left">
					<a href="tel:+7 (800) 750-50-00" class="tel">+7 (800) 750-50-00</a>
					<Button variant="primary">Подобрать судно</Button>
				</div>
				<div class="right">
					<a href="#"><HeartIcon /></a>
					<a href="#"><TelegramIcon /></a>
					<a href="#"><WhatsappIcon /></a>
					<a href="#"><UserIcon /></a>
					<Button class="burger" @click="menuStore.handleOpenMenu()"><BurgerIcon /></Button>
				</div>
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
				font-size: 14px;
				line-height: 16px;
				font-weight: 400;
			}
		}
		.info {
			display: flex;
			align-items: center;
			gap: 33px;
			margin-bottom: 15px;
			.left {
				display: flex;
				align-items: center;
				gap: 19px;

				.tel {
					font-size: 14px;
					line-height: 16px;
					font-weight: 400;
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
			}
			.right {
				display: flex;
				align-items: center;
				gap: 13px;
				a {
					height: 24px;
					width: 24px;
					@media (max-width: $desktop-md-2) {
						display: none;
						&:nth-child(1) {
							display: block;
						}
					}
					svg {
						width: 100%;
						height: 100%;
					}
				}
			}
		}
		.burger {
			display: none;
			@media (max-width: $desktop-md-2) {
				display: block;
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
