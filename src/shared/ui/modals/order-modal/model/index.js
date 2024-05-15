import { computed, ref } from 'vue';

import { defineStore } from 'pinia';

export const useOrderModalStore = defineStore('order-modal', {
	state: () => {
		return { isActive: false };
	},

	actions: {
		handleOpenModal() {
			this.isActive = !this.isActive;
		}
	}
});
