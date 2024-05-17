<script setup>
import Hero from './Hero.vue';
import Routes from './Routes.vue';

import { Boats } from '@/widgets/boats';
import { Contacts } from '@/widgets/contacts';
import { Events } from '@/widgets/events';
import { Faq } from '@/widgets/faq';
import { Gallery } from '@/widgets/gallery';
import { Service } from '@/widgets/service';

import { services } from '@/shared/config';

import { boatTabs, boats, eventTabs, events, galleryImgs, questions, routes } from '../config';
</script>

<template>
	<main class="home-page">
		<Hero />
		<Events
			:title="'Ваша морская прогулка <br />будет незабываемой'"
			:events="events"
			:tabs="eventTabs"
		/>
		<Service
			:title="'Сервис'"
			:text="'Вы можете заказать дополнительные услуги'"
			:services="services"
		/>
		<Boats :title="'Флот'" :boats="boats" :tabs="boatTabs" />
		<Routes :routes="routes" />
		<Gallery :imgs="galleryImgs" />
		<Faq :questions="questions" />
		<Contacts :mapCoords="[55.9179448791719, 37.75662745707157]" mapId="map" />
	</main>
</template>

<style lang="scss" scoped>
.home-page {
	padding-bottom: 156px;
}
</style>
