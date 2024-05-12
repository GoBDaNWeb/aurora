import { createRouter, createWebHistory } from 'vue-router';

import { Event } from '@/pages/event';
import { Events } from '@/pages/events';
import { Fleet } from '@/pages/fleet';
import { Home } from '@/pages/home';
import { Route } from '@/pages/route';
import { Routes } from '@/pages/routes';

import { PATH_PAGE } from '@/shared/config';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: PATH_PAGE.home,
			name: 'home',
			component: Home
		},
		{
			path: PATH_PAGE.routes,
			name: 'routes',
			component: Routes
		},
		{
			path: `${PATH_PAGE.routes}/:slug`,
			name: 'route',
			component: Route
		},
		{
			path: `${PATH_PAGE.fleet}`,
			name: 'fleet',
			component: Fleet
		},
		{
			path: `${PATH_PAGE.events}`,
			name: 'events',
			component: Events
		},
		{
			path: `${PATH_PAGE.events}/:slug`,
			name: 'event',
			component: Event
		}
	]
});

export default router;
