import Vue from "vue";
import VueRouter from "vue-router";
import Portfolio from "../views/Portfolio.vue";
import ProjectPage from "../views/ProjectPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "portfolio",
    component: Portfolio
  },
  {
    path: "/:title",
    name: "projectPage",
    component: ProjectPage
  }
];

const router = new VueRouter({
  routes
});

export default router;
