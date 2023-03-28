import Router from "vue-router";
import Home from "@/views/home/index.vue";
import About from "@/views/about/index.vue";
import Blog from "@/views/blog/index.vue";
import Chat from "@/views/chat/index.vue";
import Project from "@/views/project/index.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog,
  },
  {
    path: "/chat",
    name: "chat",
    component: Chat,
  },
  {
    path: "/project",
    name: "project",
    component: Project,
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

const router = new Router({
  mode: "history",
  routes,
});

export default router;
