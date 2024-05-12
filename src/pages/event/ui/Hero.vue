<script setup>
import { Title } from '@/shared/ui';
</script>

<template>
	<div class="hero">
		<div class="hero-inner container">
			<div class="banner">
				<Title variant="h3">
					День <br />
					рождения <br />на корабле
				</Title>
				<Title variant="h4"> Яхте или катере <br />в Санкт-Петербурге </Title>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.hero {
	background-image: url('../images/event/hero.jpg');
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	height: 715px;
	.hero-inner {
		position: relative;
		.banner {
			position: absolute;
			width: 504px;
			height: 504px;
			border-radius: 999px;
			top: 56px;
			right: 56px;
			background: var(--white-color);
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			gap: 21px;
			&:before {
				content: '';
				width: 486px;
				height: 486px;
				border-radius: 999px;
				border: 1px solid var(--sky-color);
				position: absolute;
			}
			h3 {
				text-transform: none;
			}
			h4 {
				text-transform: none;
			}
		}
	}
}
</style>
