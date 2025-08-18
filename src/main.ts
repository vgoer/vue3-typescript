import { createApp } from "vue";
import App from "./App.vue";

// reset css
import "@/assets/css/reset.css";

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

app.mount("#app");
