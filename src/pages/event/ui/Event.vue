<script setup>
import Description from './Description.vue';
import Hero from './Hero.vue';

import { Boats } from '@/widgets/boats';
import { OrderForm } from '@/widgets/order-form';
import { Service } from '@/widgets/service';

import { services } from '@/shared/config';

import { boats } from '../config';
</script>

<template>
	<main class="event-page">
		<Hero />
		<Description />
		<Service title="Что мы можем <br/> предложить" :services="services" />
		<Boats title="Подходящие яхты" :boats="boats" />
		<OrderForm />
	</main>
</template>

<style lang="scss" scoped></style>
<style lang="scss">
.event-page {
	.boats {
		margin-bottom: 100px;
	}
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
