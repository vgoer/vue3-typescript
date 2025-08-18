// src/stores/app.ts
import { defineStore } from "pinia";
import { computed, ref, type ComputedRef, type Ref } from "vue";
import type { PersistenceOptions } from "pinia-plugin-persistedstate";

export const useAppStore = defineStore(
	"app",
	() => {
		// State
		const theme: Ref<"light" | "dark"> = ref("light");
		const language: Ref<string> = ref("zh-CN");
		const sidebarCollapsed: Ref<boolean> = ref(false);

		// Getters
		const isDarkTheme: ComputedRef<boolean> = computed(
			() => theme.value === "dark",
		);
		const currentLanguage: ComputedRef<string> = computed(() => language.value);

		// Actions
		const toggleTheme = (): void => {
			theme.value = theme.value === "light" ? "dark" : "light";
		};

		const toggleSidebar = (): void => {
			sidebarCollapsed.value = !sidebarCollapsed.value;
		};

		const setLanguage = (lang: string): void => {
			language.value = lang;
		};

		return {
			theme,
			language,
			sidebarCollapsed,
			isDarkTheme,
			currentLanguage,
			toggleTheme,
			toggleSidebar,
			setLanguage,
		};
	},
	{
		persist: {
			enabled: true,
			strategies: [
				{
					key: "app_settings",
					storage: localStorage,
					paths: ["theme", "language", "sidebarCollapsed"],
				},
			],
		} as PersistenceOptions,
	},
);
