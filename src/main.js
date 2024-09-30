import "./assets/main.scss";
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap"
import { VueReCaptcha } from 'vue-recaptcha-v3'
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from './i18n'

const app = createApp(App).use(i18n);
app.use(VueReCaptcha, { siteKey: '6Lf1wpopAAAAAEzS5fkvCEzFHKoP2kmlIijzOKR3' });
app.use(router);

app.mount("#app");
