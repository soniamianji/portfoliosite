import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import VueAnalytics from "vue-analytics";

Vue.use(VueAnalytics, {
  id: "UA-152611120-1"
});

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
