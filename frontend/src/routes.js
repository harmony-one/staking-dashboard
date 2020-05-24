/**
 * In this module we took care of the definition of our routes, with parameters, children and component related to them
 * @module routes
 */

/**
 * Routes are all defined here
 */
export default [
  {
    path: `/`,
    redirect: `/validators`
  },
  {
    path: `/validators`,
    name: `Validators`,
    meta: {
      feature: "Validators"
    },
    component: () => import(`./components/staking/PageValidators`)
  },
  {
    path: `/analytics`,
    name: `Analytics`,
    meta: {
      feature: "Analytics"
    },
    component: () => import(`./components/staking/PageGlobal`)
  },
  // for depredecated routes
  {
    path: `/staking/validators`,
    redirect: `/validators`
  },
  {
    path: `/validators/:validator`,
    name: `validator`,
    meta: {
      feature: "Validators"
    },
    component: () => import(`./components/staking/PageValidatorCharts/index`)
  },
  {
    path: `/staking/validators/:validator`,
    redirect: `/validators/:validator`
  },
  {
    path: `/portfolio`,
    name: `portfolio`,
    component: () => import(`./components/wallet/PagePortfolio`),
    meta: {
      requiresAuth: true,
      feature: "Portfolio"
    }
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
      requiresAuth: false
    }
  },
  {
    path: `/blocks/:height`,
    name: `block`,
    component: () => import(`./components/network/PageBlock`),
    meta: {
      feature: "Explorer"
    }
  },
  {
    path: `/welcome`,
    name: `welcome`,
    components: {
      session: () => import(`./components/common/TmSessionWelcome`)
    },
    meta: {
      feature: "Session"
    }
  },
  {
    path: `/login`,
    name: `login`,
    components: {
      session: () => import(`./components/common/TmSessionSignIn`)
    },
    meta: {
      feature: "Session"
    }
  },
  {
    path: `/create`,
    name: `create`,
    components: {
      session: () => import(`./components/common/TmSessionSignUp`)
    },
    meta: {
      feature: "Session"
    }
  },
  {
    path: `/recover`,
    name: `recover`,
    components: {
      session: () => import(`./components/common/TmSessionImport`)
    },
    meta: {
      feature: "Session"
    }
  },
  {
    path: `/explore`,
    name: `explore`,
    components: {
      session: () => import(`./components/common/TmSessionExplore`)
    },
    meta: {
      feature: "Session"
    }
  },
  {
    path: `/ledger`,
    name: `ledger`,
    components: {
      session: () => import(`./components/common/TmSessionHardware`)
    },
    meta: {
      feature: "Session"
    }
  },
  {
    path: `/extension`,
    name: `extension`,
    components: {
      session: () => import(`./components/common/TmSessionExtension`)
    },
    meta: {
      feature: "Session"
    }
  },
  {
    path: `/mathwallet`,
    name: `mathwallet`,
    components: {
      session: () => import(`./components/common/TmSessionMathWallet`)
    },
    meta: {
      feature: "Session"
    }
  },
  {
    path: `/existing`,
    name: `existing`,
    components: {
      session: () => import(`./components/common/TmSessionExisting`)
    },
    meta: {
      feature: "Session"
    }
  },
  { path: `/404`, component: () => import(`./components/common/Page404`) },
  {
    path: `/privacy`,
    component: () => import(`./components/common/PagePrivacy`)
  },
  {
    path: `/terms`,
    component: () => import(`./components/common/PageTerms`)
  },
  {
    path: `/security`,
    component: () => import(`./components/common/PageSecurity`)
  },
  {
    path: `/about`,
    component: () => import(`./components/common/PageAbout`)
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
  { path: `*`, component: () => import(`./components/common/Page404`) }
]
