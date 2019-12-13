import Vue from 'vue'
// Set this to false to prevent the production tip on Vue startup.
Vue.config.productionTip = false

import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: () => import('./components/Index.vue')
    },
    {
      path: '/login',
      component: () => import('./components/login/Login.vue')
    },
    {
      path: '/dashboard',
      component: () => import('./components/dashboard/Dashboard.vue'),
      children: [
        {
          path: '',
          component: () => import('./components/dashboard/Module0/Module0.vue')
        },
        {
          path: '1',
          component: () => import('./components/dashboard/Module1/Module1.vue')
        },
        {
          path: '2/1',
          component: () => import('./components/dashboard/Module2/SubModule1/SubModule1.vue')
        },
        {
          path: '2/2',
          component: () => import('./components/dashboard/Module2/SubModule2/SubModule2.vue')
        },
        {
          path: '2/3',
          component: () => import('./components/dashboard/Module2/SubModule3/SubModule3.vue')
        },
        {
          path: '2/4',
          component: () => import('./components/dashboard/Module2/SubModule4/SubModule4.vue')
        },
        {
          path: '3',
          component: () => import('./components/dashboard/Module3/Module3.vue')
        },
        {
          path: '4',
          component: () => import('./components/dashboard/Module4/Module4.vue')
        },
        {
          path: '5',
          component: () => import('./components/dashboard/Module5/Module5.vue')
        },
        {
          path: '6',
          component: () => import('./components/dashboard/Module6/Module6.vue')
        },
        {
          path: '7',
          component: () => import('./components/dashboard/Module7/Module7.vue')
        },
        {
          path: '8',
          component: () => import('./components/dashboard/Module8/Module8.vue')
        },
        {
          path: '9',
          component: () => import('./components/dashboard/Module9/Module9.vue')
        },
      ]
    },
    {
      path: '*',
      component: () => import('./components/Page404/Page404.vue')
    }
  ]
})

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

import App from './App.vue'
new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
