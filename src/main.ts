import { createApp } from "vue";
import App from "./App.vue";

// reset css
import "@/assets/css/reset.css";

const app = createApp(App);

// router
import router from "@/router/index";
app.use(router);

app.mount("#app");
