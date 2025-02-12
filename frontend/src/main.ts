/* istanbul ignore file */

import Vue from "vue"
import Tooltip from "vue-directive-tooltip"
import Vuelidate from "vuelidate"
import InfiniteScroll from "vue-infinite-scroll"
import VueClipboard from "vue-clipboard2"
import { tooltipStyles, focusElement, focusParentLast } from "src/directives"
import App from "./App.vue"
import init from "./initializeApp"
import { getURLParams } from "./scripts/url"
import SvgIcon from 'vue-svgicon'
// @ts-ignore
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

// @ts-ignore
import VueMq from "vue-mq"

import './icons'


Vue.config.productionTip = false

Vue.use(Tooltip, { delay: 1 })
Vue.use(Vuelidate)
Vue.use(VueClipboard)
Vue.use(InfiniteScroll)
Vue.use(Loading)

// Default tag name is 'svgicon'
Vue.use(SvgIcon, {
  tagName: 'svgicon'
})

Vue.use(VueMq, {
  breakpoints: {
    // default breakpoints - customize this
    sm: 414,
    md: 800,
    tab: 1024,
    lg: 1250,
    xlg: Infinity
  },
  defaultBreakpoint: "md" // customize this for SSR
})

Vue.directive(`focus`, focusElement)
Vue.directive(`info-style`, tooltipStyles)
Vue.directive(`focus-last`, focusParentLast)

const urlParams = getURLParams(window)
const { store, router } = init(urlParams)

// window.store = store;
// update1

new Vue({
  router,
  ...App,
  store
}).$mount("#app")
