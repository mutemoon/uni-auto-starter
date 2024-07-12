import { createSSRApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import persist from "pinia-plugin-persist-uni";
export function createApp() {
  const app = createSSRApp(App);
  const pinia = createPinia();
  pinia.use(persist);
  app.use(pinia);
  return {
    app,
  };
}
