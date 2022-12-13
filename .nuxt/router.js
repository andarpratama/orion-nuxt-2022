import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _596c6aee = () => interopDefault(import('../pages/checkout-success.vue' /* webpackChunkName: "pages/checkout-success" */))
const _4e57f35e = () => interopDefault(import('../pages/court/index.vue' /* webpackChunkName: "pages/court/index" */))
const _50342454 = () => interopDefault(import('../pages/order/index.vue' /* webpackChunkName: "pages/order/index" */))
const _7f00111f = () => interopDefault(import('../pages/test.vue' /* webpackChunkName: "pages/test" */))
const _000f45e2 = () => interopDefault(import('../pages/auth/login.vue' /* webpackChunkName: "pages/auth/login" */))
const _45a66d6d = () => interopDefault(import('../pages/auth/register.vue' /* webpackChunkName: "pages/auth/register" */))
const _7550b4a6 = () => interopDefault(import('../pages/court/_court_id.vue' /* webpackChunkName: "pages/court/_court_id" */))
const _82ef39e6 = () => interopDefault(import('../pages/order/_order_id.vue' /* webpackChunkName: "pages/order/_order_id" */))
const _79d7ce15 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/checkout-success",
    component: _596c6aee,
    name: "checkout-success"
  }, {
    path: "/court",
    component: _4e57f35e,
    name: "court"
  }, {
    path: "/order",
    component: _50342454,
    name: "order"
  }, {
    path: "/test",
    component: _7f00111f,
    name: "test"
  }, {
    path: "/auth/login",
    component: _000f45e2,
    name: "auth-login"
  }, {
    path: "/auth/register",
    component: _45a66d6d,
    name: "auth-register"
  }, {
    path: "/court/:court_id",
    component: _7550b4a6,
    name: "court-court_id"
  }, {
    path: "/order/:order_id",
    component: _82ef39e6,
    name: "order-order_id"
  }, {
    path: "/",
    component: _79d7ce15,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
