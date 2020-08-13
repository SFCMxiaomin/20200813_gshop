import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from "../pages/Msite/Msite"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/msite"
  },
  {
    path: "/msite",
    component: Msite,
    meta: {
      ShowFooter: true
    }
  },
  {
    path: "/order",
    component: () => import("../pages/Order/Order"),
    meta: {
      ShowFooter: true
    }
  },
  {
    path: "/search",
    component: () => import("../pages/Search/Search"),
    meta: {
      ShowFooter: true
    }
  },
  {
    path: "/profile",
    component: () => import("../pages/Profile/Profile"),
    meta: {
      ShowFooter: true
    }
  },
  {
    path: "/login",
    component: () => import("../pages/Login/Login")
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
