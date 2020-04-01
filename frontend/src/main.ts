/* istanbul ignore file */

import Vue from "vue"
import Tooltip from "vue-directive-tooltip"
import Vuelidate from "vuelidate"
import InfiniteScroll from "vue-infinite-scroll"
import VueClipboard from "vue-clipboard2"
import { focusElement, focusParentLast } from "src/directives"
import App from "./App.vue"
import init from "./initializeApp"
import { getURLParams } from "./scripts/url"
import "./registerServiceWorker"
import "@babel/polyfill"
import SvgIcon from 'vue-svgicon'
// @ts-ignore
import VueMq from "vue-mq"

import './icons'


Vue.config.productionTip = false

Vue.use(Tooltip, { delay: 1 })
Vue.use(Vuelidate)
Vue.use(VueClipboard)
Vue.use(InfiniteScroll)

// Default tag name is 'svgicon'
Vue.use(SvgIcon, {
  tagName: 'svgicon'
})

Vue.use(VueMq, {
  breakpoints: {
    // default breakpoints - customize this
    sm: 412,
    md: 800,
    tab: 1024,
    lg: 1250,
    xlg: Infinity
  },
  defaultBreakpoint: "md" // customize this for SSR
})

Vue.directive(`focus`, focusElement)
Vue.directive(`focus-last`, focusParentLast)

const urlParams = getURLParams(window)
const { store, router, apolloProvider } = init(urlParams)

// window.store = store;

new Vue({
  router,
  ...App,
  store,
  apolloProvider
}).$mount("#app")
