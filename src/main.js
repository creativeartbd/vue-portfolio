import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/main.css";
import "./assets/css/responsive.css";
import "./assets/css/font-awesome.min.css";
import PageLoader from "./components/form/PageLoader.vue";

const app = createApp(App);

app.component("PageLoader", PageLoader); // Register the PageLoader component globally
app.use(store).use(router).mount("#app");
