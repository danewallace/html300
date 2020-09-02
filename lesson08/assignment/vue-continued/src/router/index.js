import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Images from "../views/Images.vue";
import Facts from "../views/Facts.vue";
import Social from "../views/Social.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/images",
    name: "Images",
    component: Images
  },
  {
    path: "/facts",
    name: "Facts",
    component: Facts
  },
  {
    path: "/social",
    name: "Social",
    component: Social
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
