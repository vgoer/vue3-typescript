// src/stores/theme.ts
import { defineStore } from "pinia";
import { ref } from "vue";
import type { PersistenceOptions } from "pinia-plugin-persistedstate";

export type ThemeType = "light" | "dark" | "custom";

export const useThemeStore = defineStore(
	"theme",
	() => {
		const currentTheme = ref<ThemeType>("light");

		// 主题配置
		const themeConfigs = {
			light: {
				"--el-color-primary": "#409eff",
				"--el-bg-color": "#ffffff",
				"--el-text-color-primary": "#303133",
			},
			dark: {
				"--el-color-primary": "#409eff",
				"--el-bg-color": "#141414",
				"--el-text-color-primary": "#e5eaf3",
			},
			custom: {
				"--el-color-primary": "#ff6b6b",
				"--el-bg-color": "#f8f9fa",
				"--el-text-color-primary": "#2c3e50",
			},
		};

		const setTheme = (theme: ThemeType) => {
			currentTheme.value = theme;
			applyTheme(theme);
			localStorage.setItem("theme", theme);
		};

		const applyTheme = (theme: ThemeType) => {
			const config = themeConfigs[theme];
			Object.entries(config).forEach(([key, value]) => {
				document.documentElement.style.setProperty(key, value);
			});

			// 设置data-theme属性
			document.documentElement.setAttribute("data-theme", theme);
		};

		const initTheme = () => {
			const savedTheme =
				(localStorage.getItem("theme") as ThemeType) || "light";
			setTheme(savedTheme);
		};

		return {
			currentTheme,
			setTheme,
			initTheme,
		};
	},
	{
		persist: {
			enabled: true,
			strategies: [
				{
					key: "theme",
					storage: localStorage,
					paths: ["currentTheme"],
				},
			],
		} as PersistenceOptions,
	},
);
