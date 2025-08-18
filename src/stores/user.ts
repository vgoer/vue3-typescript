// src/stores/user.ts
import { defineStore } from "pinia";
import { ref, type Ref } from "vue";
import type { PersistenceOptions } from "pinia-plugin-persistedstate";

export const useUserStore = defineStore(
	"user",
	() => {
		// State
		const id: Ref<string | null> = ref(null);
		const name: Ref<string> = ref("");
		const email: Ref<string> = ref("");
		const token: Ref<string | null> = ref(null);
		const isAuthenticated: Ref<boolean> = ref(false);

		// Actions
		const login = (userData: {
			id: string;
			name: string;
			email: string;
			token: string;
		}) => {
			id.value = userData.id;
			name.value = userData.name;
			email.value = userData.email;
			token.value = userData.token;
			isAuthenticated.value = true;
		};

		const logout = () => {
			id.value = null;
			name.value = "";
			email.value = "";
			token.value = null;
			isAuthenticated.value = false;
		};

		const updateProfile = (updateData: { name?: string; email?: string }) => {
			if (updateData.name) name.value = updateData.name;
			if (updateData.email) email.value = updateData.email;
		};

		return {
			// State
			id,
			name,
			email,
			token,
			isAuthenticated,

			// Actions
			login,
			logout,
			updateProfile,
		};
	},
	{
		persist: {
			enabled: true,
			strategies: [
				{
					key: "user",
					storage: localStorage,
					paths: ["token", "isAuthenticated"],
				},
			],
		} as PersistenceOptions,
	},
);
