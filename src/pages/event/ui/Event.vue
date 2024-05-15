<script setup>
import Description from './Description.vue';
import Hero from './Hero.vue';
import OrderForm from './OrderForm.vue';

import { Boats } from '@/widgets/boats';
import { Gallery } from '@/widgets/gallery';
import { Service } from '@/widgets/service';

import { services } from '@/shared/config';

import { boats, galleryImgs } from '../config';
</script>

<template>
	<main class="event-page">
		<Hero />
		<Description />
		<Gallery :imgs="galleryImgs" />
		<OrderForm />
		<Service title="Что мы можем <br/> предложить" :services="services" />
		<Boats title="Подходящие яхты" :boats="boats" />
	</main>
</template>

<style lang="scss" scoped></style>
<style lang="scss">
.event-page {
	.boats {
		margin-bottom: 100px;
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

	.order-form {
		.selector {
			button {
				border: 1px solid var(--green-2-color);
				border-radius: 8px;

				p {
					color: var(--green-color);
				}
			}
		}
		.dp__input_wrap {
			input {
				border: none;
				border-radius: 10px;
				padding: 19px 24px;
				border: 1px solid var(--green-2-color);
				&::placeholder {
					color: var(--green-color) !important;
				}
			}
			.dp__input_icon {
				padding: 0;
				right: 19px;
				left: auto;
				width: 28px;
				height: 21px;
				top: 24px;
			}

			.dp__clear_icon {
				display: none;
			}
		}
	}
}
</style>
