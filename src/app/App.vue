<script setup>
import { watch } from 'vue';
import { RouterLink, RouterView, useRoute } from 'vue-router';

import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';

import { Menu, OrderModal } from '@/shared/ui';

const router = useRoute();

watch(router, () => {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'instant'
	});
});
</script>

<template>
	<Header />
	<Menu />
	<RouterView />
	<Footer />
	<OrderModal />
</template>
