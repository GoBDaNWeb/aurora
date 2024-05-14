<script setup>
import Hero from './Hero.vue';
import Routes from './Routes.vue';

import { Boats } from '@/widgets/boats';
import { Events } from '@/widgets/events';
import { Service } from '@/widgets/service';

import { services } from '@/shared/config';

import { boats, eventTabs, events } from '../config';
</script>

<template>
	<main class="fleet-inner-page">
		<Hero />
		<Routes />
		<Events :title="'Доступные мероприятия'" :events="events" :tabs="eventTabs" />
		<Service title="Что мы можем <br/> предложить" :services="services" />
		<Boats title="Похожие судна" :boats="boats" />
	</main>
</template>
<style lang="scss">
.fleet-inner-page {
	.boats {
		margin-bottom: 210px;
	}
	.service {
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
