import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "@/views/Login.vue";
import Container from "@/component/Container.vue";
import User from "@/views/manager/User.vue";
import Role from "@/views/manager/Role.vue";
import Menu from "@/views/manager/Menu.vue";
import UserCenter from "@/views/manager/UserCenter.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children: [{
      path: "/index",
      name: "index",
      component: Container,
    },
      {
        path: "/user",
        name: "user",
        component: User,
      },
      {
        path: "/role",
        name: "role",
        component: Role,
      },
      {
        path: "/menu",
        name: "menu",
        component: Menu,
      },
      {
        path: "/userCenter",
        name: "userCenter",
        component: UserCenter,
      }

    ]
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
