<script setup>
import { watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

import { PATH_PAGE } from '@/shared/config';
import { CloseIcon, TelegramIcon, WhatsappIcon } from '@/shared/icons';
import { Button } from '@/shared/ui';

import { routes } from '../config';
import { useMenuStore } from '../model';

const route = useRoute();

const menuStore = useMenuStore();
watch(route, () => {
	menuStore.isActive ? menuStore.handleOpenMenu() : null;
});

watch(
	() => menuStore.isActive,
	() => {
		if (menuStore.isActive) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.removeAttribute('style');
		}
	}
);
</script>

<template>
	<transition name="menu">
		<div class="menu" @click.stop="menuStore.handleOpenMenu" v-if="menuStore.isActive">
			<div class="menu-content" @click.stop>
				<div class="top">
					<RouterLink :to="PATH_PAGE.home" class="logo">
						<img src="/images/logo.svg" alt="logo" />
					</RouterLink>
					<Button @click.stop="menuStore.handleOpenMenu"><CloseIcon /></Button>
				</div>
				<nav class="center">
					<RouterLink v-for="route in routes" :key="route.title" :to="route.url">
						{{ route.title }}
					</RouterLink>
				</nav>
				<div class="bottom">
					<a href="tel:+7 (800) 750-50-00" class="tel">+7 (800) 750-50-00</a>
					<div class="btns">
						<Button variant="primary">Подобрать судно</Button>
						<Button variant="outline">
							<RouterLink to="/">Войти в личный кабинет</RouterLink>
						</Button>
					</div>
					<div class="socials">
						<a href="#" target="_blank"><TelegramIcon /></a>
						<a href="#" target="_blank"><WhatsappIcon /></a>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/vars';

.menu {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 120;
	background: rgba(242, 233, 229, 0.5);
	backdrop-filter: blur(15px);
	transition: var(--trs-300);
	z-index: 150;
	.menu-content {
		background: var(--white-color);
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		width: 50vw;
		padding: 20px 15px;
		transition: var(--trs-300);
		@media (max-width: $tab-sm) {
			width: 100vw;
		}
		.top {
			display: flex;
			align-items: flex-start;
			justify-content: space-between;
		}
		.center {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 30px;
			margin-top: 41px;
			a {
				font-weight: 400;
				font-size: 18px;
				line-height: 21px;
			}
		}
		.bottom {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-top: 55px;
			.tel {
				font-weight: 400;
				font-size: 25px;
				line-height: 30px;
			}
			.btns {
				width: 100%;
				margin-top: 25px;
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 22px;
				button {
					max-width: 360px;
					width: 100%;
				}
			}
			.socials {
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 22px;
				margin-top: 32px;
			}
		}
	}
}
.menu-enter-active,
.modal-leave-active {
	transition: var(--trs-300);
}

.menu-enter-from,
.menu-leave-to {
	opacity: 0;
	.menu-content {
		transform: translateX(100%);
	}
}
</style>
