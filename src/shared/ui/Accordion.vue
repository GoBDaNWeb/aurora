<script setup>
import { Collapse } from 'vue-collapsed';

import { Button, Title } from '@/shared/ui';

const props = defineProps(['questions']);
function handleAccordion(selectedIndex) {
	props.questions.forEach((_, index) => {
		props.questions[index].isExpanded =
			index === selectedIndex ? !props.questions[index].isExpanded : false;
	});
}
</script>

<template>
	<div
		class="accordion"
		:class="{ active: question.isExpanded }"
		v-for="(question, index) in questions"
		:key="question.title"
	>
		<div class="btn-wrapper" @click="() => handleAccordion(index)">
			<p>{{ question.title }}</p>
			<button>
				<span></span>
			</button>
		</div>
		<Collapse :when="questions[index].isExpanded" class="collapse">
			<p>
				{{ question.answer }}
			</p>
		</Collapse>
	</div>
</template>

<style lang="scss">
.accordion.active {
	.btn-wrapper {
		button {
		}
	}
}
.accordion {
	.btn-wrapper {
		&:hover {
			button {
				border-color: var(--pink-color);
				svg {
					path {
						stroke: var(--pink-color);
						fill: var(--pink-color);
					}
				}
			}
			h6 {
				color: var(--pink-color);
			}
		}
	}
}
</style>
<style lang="scss" scoped>
@import '@/shared/styles/vars';

.accordion.active {
	.btn-wrapper {
		button {
			span {
				&:after {
					height: 0;
				}
			}
		}
	}
}
.accordion {
	display: flex;
	flex-direction: column;
	.btn-wrapper {
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 20px;
		padding: 21px 25px;
		border-radius: 8px;
		background: var(--green-light-color);
		transition: var(--trs-300);
		@media (max-width: $tab) {
			gap: 15px;
		}
		button {
			width: 40px;
			height: 40px;
			min-width: 40px;
			min-height: 40px;
			max-width: 40px;
			max-height: 40px;
			background: var(--white-color);
			border-radius: 999px;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 0;
			@media (max-width: $tab) {
				width: 35px;
				height: 35px;
				min-width: 35px;
				min-height: 35px;
				max-width: 35px;
				max-height: 35px;
			}
			span {
				display: block;
				width: 19px;
				height: 2px;
				background: var(--sky-color);
				position: relative;
				&:after {
					content: '';
					position: absolute;
					height: 19px;
					width: 2px;
					background: var(--sky-color);
					top: 0;
					bottom: 0;
					right: 0;
					left: 0;
					margin: auto;
					transition: var(--trs-300);
				}
			}
		}
		p {
			color: var(--black-color);
			font-weight: 500;
			font-size: 20px;
			line-height: 26px;
			transition: var(--trs-300);
		}
	}
	.collapse {
		p {
			font-weight: 400;
			font-size: 16px;
			line-height: 22px;
			margin-top: 20px;
			background: var(--green-light-2-color);
			padding: 25px;
			border-radius: 8px;
		}
	}
}
</style>
