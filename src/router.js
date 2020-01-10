import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "home" */'@/pages/Home/Home.vue')
  },
  {
    path: '/*',
    redirect: '/'
  }
];

const router = new Router({
  routes,
  mode: 'history'
});

export default router
