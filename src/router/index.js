import Vue from "vue";
import VueRouter from "vue-router";
import Projects from "../views/Projects.vue";
import Contact from "../views/Contact.vue";
import Profile from "../views/Profile.vue";

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
    path: "/contact",
    name: "contact",
    component: Contact
  }
];

const router = new VueRouter({
  routes
});

export default router;
