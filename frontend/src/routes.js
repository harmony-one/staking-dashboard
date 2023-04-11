/**
 * In this module we took care of the definition of our routes, with parameters, children and component related to them
 * @module routes
 */

/**
 * Routes are all defined here
 */
const chainTitle = process.env.DEFAULT_CHAIN_TITLE
export default [
  {
    path: `/`,
    redirect: `/validators/${chainTitle}`,
  },
  {
    path: `/validators/`,
    redirect: `/validators/${chainTitle}`,
  },
  {
    path: `/validators/:chaintitle`,
    name: `Validators`,
    meta: {
      feature: "Validators",
    },
    component: () =>
      import(`./components/staking/PageValidators/PageValidators`),
  },
  {
    path: `/analytics/`,
    redirect: `/analytics/${chainTitle}`,
  },
  {
    path: `/analytics/:chaintitle`,
    name: `Analytics`,
    meta: {
      feature: "Analytics",
    },
    component: () => import(`./components/staking/PageGlobal`),
  },
  // for depredecated routes
  {
    path: `/staking/validators`,
    redirect: `/validators`,
  },
  {
    path: `/validators/:chaintitle/:validator`,
    name: `validator`,
    meta: {
      feature: "Validators",
    },
    component: () => import(`./components/staking/PageValidatorCharts/index`),
  },
  {
    path: `/widget/:chaintitle/:validator`,
    name: `widget`,
    components: {
      session: () => import(`./components/staking/PageValidatorCharts/widget`),
    },
    meta: {
      feature: "Session",
    },
  },
  {
    path: `/staking/validators/:validator`,
    redirect: `/validators/:validator`,
  },
  {
    path: `/portfolio/`,
    redirect: `/portfolio/${chainTitle}`,
  },
  {
    path: `/portfolio/:chaintitle`,
    name: `portfolio`,
    component: () => import(`./components/wallet/PagePortfolio`),
    meta: {
      requiresAuth: true,
      feature: "Portfolio",
    },
  },
  // {
  //   path: `/transactions`,
  //   name: `transactions`,
  //   component: () => import(`./components/wallet/PageTransactions`),
  //   meta: {
  //     requiresAuth: true,
  //     feature: "Activity"
  //   }
  // },
  {
    path: `/networks`,
    name: `networks`,
    component: () => import(`./components/network/PageNetworks`),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: `/blocks/:height`,
    name: `block`,
    component: () => import(`./components/network/PageBlock`),
    meta: {
      feature: "Explorer",
    },
  },
  {
    path: `/welcome`,
    name: `welcome`,
    components: {
      session: () => import(`./components/common/TmSessionWelcome`),
    },
    meta: {
      feature: "Session",
    },
  },
  {
    path: `/login`,
    name: `login`,
    components: {
      session: () => import(`./components/common/TmSessionSignIn`),
    },
    meta: {
      feature: "Session",
    },
  },
  {
    path: `/create`,
    name: `create`,
    components: {
      session: () => import(`./components/common/TmSessionSignUp`),
    },
    meta: {
      feature: "Session",
    },
  },
  {
    path: `/recover`,
    name: `recover`,
    components: {
      session: () => import(`./components/common/TmSessionImport`),
    },
    meta: {
      feature: "Session",
    },
  },
  {
    path: `/explore`,
    name: `explore`,
    components: {
      session: () => import(`./components/common/TmSessionExplore`),
    },
    meta: {
      feature: "Session",
    },
  },
  {
    path: `/ledger`,
    name: `ledger`,
    components: {
      session: () => import(`./components/common/TmSessionHardware`),
    },
    meta: {
      feature: "Session",
    },
  },
  {
    path: `/extension`,
    name: `extension`,
    components: {
      session: () => import(`./components/common/TmSessionExtension`),
    },
    meta: {
      feature: "Session",
    },
  },
  {
    path: `/mathwallet`,
    name: `mathwallet`,
    components: {
      session: () => import(`./components/common/TmSessionMathWallet`),
    },
    meta: {
      feature: "Session",
    },
  },
  {
    path: `/onewallet`,
    name: `onewallet`,
    components: {
      session: require(`./components/common/TmSessionOneWallet`).default,
    },
    meta: {
      feature: "Session",
    },
  },
  {
    path: `/metamask`,
    name: `metamask`,
    components: {
      session: require(`./components/common/TmSessionMetaMask`).default,
    },
    meta: {
      feature: "Session",
    },
  },
  {
    path: `/multisig`,
    name: `multisig`,
    components: {
      session: require(`./components/common/TmSessionMultisig`).default
    },
    meta: {
      feature: "Session"
    }
  },
  {
    path: `/existing`,
    name: `existing`,
    components: {
      session: () => import(`./components/common/TmSessionExisting`),
    },
    meta: {
      feature: "Session",
    },
  },
  { path: `/404`, component: () => import(`./components/common/Page404`) },
  {
    path: `/privacy`,
    component: () => import(`./components/common/PagePrivacy`),
  },
  {
    path: `/terms`,
    component: () => import(`./components/common/PageTerms`),
  },
  {
    path: `/snapshot`,
    component: () => import(`./components/common/PageSnapshot`),
  },
  {
    path: `/security`,
    component: () => import(`./components/common/PageSecurity`),
  },
  {
    path: `/about`,
    component: () => import(`./components/common/PageAbout`),
  },
  // {
  //   path: `/careers`,
  //   component: () => import(`./components/common/PageCareers`)
  // },
  // {
  //   path: `/feature-not-available/:feature`,
  //   component: () => import(`./components/common/PageFeatureNotAvailable`),
  //   props: true
  // },
  { path: `*`, component: () => import(`./components/common/Page404`) },
]
