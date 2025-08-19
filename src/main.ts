import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

// router
import router from "@/router/index";
app.use(router);

// pinia
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
// 创建 Pinia 实例并添加持久化插件
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);

// 安装国际化
import { installI18n } from "@/plugins/i18n";
installI18n(app);

// 暗黑
import "element-plus/theme-chalk/dark/css-vars.css";
// reset css
import "@/assets/css/reset.css";

app.mount("#app");
