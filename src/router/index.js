import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/home.vue";
import About from "@/views/about.vue";
const routes = [
  {
    path: "/",
    // name: "home",
    component: Home,
  },
  {
    path: "/about",
    // name: "home",
    component: About,
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
