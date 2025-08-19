import { createI18n } from "vue-i18n";
import enUS from "./en-US";
import zhCN from "./zh-CN";
import type { App } from "vue";

// Element Plus 语言包
import enLocale from "element-plus/es/locale/lang/en";
import zhLocale from "element-plus/es/locale/lang/zh-cn";

// 合并语言包
const messages = {
	"en-US": {
		...enUS,
		...enLocale,
	},
	"zh-CN": {
		...zhCN,
		...zhLocale,
	},
};

// 创建 i18n 实例
export const i18n = createI18n({
	legacy: false, // 使用 Composition API 模式
	locale: localStorage.getItem("lang") || "zh-CN", // 默认语言
	fallbackLocale: "en-US", // 回退语言
	messages,
});

// 导出安装函数
export const setupI18n = (app: App) => {
	app.use(i18n);
};

// 获取语言
const currentLang = ref(localStorage.getItem("lang") || "zh-CN");

// 设置
export const setLocale = (lang: "en-US" | "zh-CN") => {
	i18n.global.locale.value = lang;
	localStorage.setItem("lang", lang);
	currentLang.value = lang; // 更新响应式值
};

// 获取
export const getElementLocale = computed(() => {
	return currentLang.value === "zh-CN" ? zhLocale : enLocale;
});

// 导出翻译函数
export const t = i18n.global.t;
