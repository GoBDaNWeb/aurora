<script setup>
import Hero from './Hero.vue';
import OrderForm from './OrderForm.vue';

import { Boats } from '@/widgets/boats';
import { Gallery } from '@/widgets/gallery';
import { Service } from '@/widgets/service';

import { services } from '@/shared/config';

import { boats, galleryImgs } from '../config';
</script>

<template>
	<main class="route-page">
		<Hero />
		<Gallery :imgs="galleryImgs" />
		<Boats title="Доступные судна на маршруте" :boats="boats" />
		<Service title="Что мы можем <br/> предложить" :services="services" />
		<OrderForm />
	</main>
</template>

<style lang="scss">
.route-page {
	.service {
		margin-top: 102px;
		background-image: url('../images/services/bg.jpg');
		h3 {
			color: var(--white-color);
		}
		.service-border {
			display: none;
		}
	}
}
</style>
<style lang="scss" scoped></style>
