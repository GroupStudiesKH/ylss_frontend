import "./assets/main.scss";
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap"
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from './i18n'

const app = createApp(App).use(i18n);
app.use(router);

app.mount("#app");
