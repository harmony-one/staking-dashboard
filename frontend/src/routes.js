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
  // {
  //   path: `/proposals`,
  //   name: `Proposals`,
  //   meta: {
  //     feature: "Proposals"
  //   },
  //   component: require(`./components/governance/PageProposals`).default
  // },
  // for depredecated routes
  // {
  //   path: `/governance/proposals`,
  //   redirect: `/proposals`
  // },
  // {
  //   path: `/proposals/:proposalId`,
  //   name: `Proposal`,
  //   meta: {
  //     feature: "Proposals"
  //   },
  //   component: require(`./components/governance/PageProposal`).default,
  //   props: true
  // },
  // for depredecated routes
  // {
  //   path: `/governance/proposals/:proposalId`,
  //   redirect: `/proposals/:proposalId`
  // },
  {
    path: `/validators`,
    name: `Validators`,
    meta: {
      feature: "Validators"
    },
    component: require(`./components/staking/PageValidators`).default
  },
  {
    path: `/global`,
    name: `Global View`,
    meta: {
      feature: "Global View"
    },
    component: require(`./components/staking/PageGlobal`).default
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
    component: require(`./components/staking/PageValidatorCharts/index`).default
  },
  {
    path: `/staking/validators/:validator`,
    redirect: `/validators/:validator`
  },
  {
    path: `/portfolio`,
    name: `portfolio`,
    component: require(`./components/wallet/PagePortfolio`).default,
    meta: {
      requiresAuth: true,
      feature: "Portfolio"
    }
  },
  // {
  //   path: `/transactions`,
  //   name: `transactions`,
  //   component: require(`./components/wallet/PageTransactions`).default,
  //   meta: {
  //     requiresAuth: true,
  //     feature: "Activity"
  //   }
  // },
  {
    path: `/networks`,
    name: `networks`,
    component: require(`./components/network/PageNetworks`).default,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: `/blocks/:height`,
    name: `block`,
    component: require(`./components/network/PageBlock`).default,
    meta: {
      feature: "Explorer"
    }
  },
  {
    path: `/welcome`,
    name: `welcome`,
    components: {
      session: require(`./components/common/TmSessionWelcome`).default
    },
    meta: {
      feature: "Session"
    }
  },
  {
    path: `/login`,
    name: `login`,
    components: {
      session: require(`./components/common/TmSessionSignIn`).default
    },
    meta: {
      feature: "Session"
    }
  },
  {
    path: `/create`,
    name: `create`,
    components: {
      session: require(`./components/common/TmSessionSignUp`).default
    },
    meta: {
      feature: "Session"
    }
  },
  {
    path: `/recover`,
    name: `recover`,
    components: {
      session: require(`./components/common/TmSessionImport`).default
    },
    meta: {
      feature: "Session"
    }
  },
  {
    path: `/explore`,
    name: `explore`,
    components: {
      session: require(`./components/common/TmSessionExplore`).default
    },
    meta: {
      feature: "Session"
    }
  },
  {
    path: `/ledger`,
    name: `ledger`,
    components: {
      session: require(`./components/common/TmSessionHardware`).default
    },
    meta: {
      feature: "Session"
    }
  },
  {
    path: `/extension`,
    name: `extension`,
    components: {
      session: require(`./components/common/TmSessionExtension`).default
    },
    meta: {
      feature: "Session"
    }
  },
  {
    path: `/existing`,
    name: `existing`,
    components: {
      session: require(`./components/common/TmSessionExisting`).default
    },
    meta: {
      feature: "Session"
    }
  },
  { path: `/404`, component: require(`./components/common/Page404`).default },
  {
    path: `/privacy`,
    component: require(`./components/common/PagePrivacy`).default
  },
  {
    path: `/terms`,
    component: require(`./components/common/PageTerms`).default
  },
  {
    path: `/security`,
    component: require(`./components/common/PageSecurity`).default
  },
  {
    path: `/about`,
    component: require(`./components/common/PageAbout`).default
  },
  // {
  //   path: `/careers`,
  //   component: require(`./components/common/PageCareers`).default
  // },
  // {
  //   path: `/feature-not-available/:feature`,
  //   component: require(`./components/common/PageFeatureNotAvailable`).default,
  //   props: true
  // },
  { path: `*`, component: require(`./components/common/Page404`).default }
]
