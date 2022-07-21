import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import BasePaper from "./components/base/BasePaper.vue";
import BaseRock from "./components/base/BaseRock.vue";
import BaseScissors from "./components/base/BaseScissors.vue";
import BaseModal from "./components/base/BaseModal.vue";

import "./assets/main.css";

const app = createApp(App);

app.component("BasePaper", BasePaper);
app.component("BaseRock", BaseRock);
app.component("BaseScissors", BaseScissors);
app.component("BaseModal", BaseModal);

app.use(store);

app.mount("#app");
