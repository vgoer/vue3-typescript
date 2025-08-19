import type { App } from "vue";
import { setupI18n } from "@/locales";

export const installI18n = (app: App) => {
	setupI18n(app);
};
