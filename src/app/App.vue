<script setup>
import { RouterLink, RouterView } from 'vue-router';

import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';

import { Menu } from '@/shared/ui';
</script>

<template>
	<Header />
	<Menu />
	<RouterView />
	<Footer />
</template>
