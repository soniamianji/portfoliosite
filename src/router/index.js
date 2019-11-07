import Vue from "vue";
import VueRouter from "vue-router";
import Projects from "../views/Projects.vue";
import Profile from "../views/Profile.vue";
import ProjectPage from "../views/ProjectPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "projects",
    component: Projects
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile
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
