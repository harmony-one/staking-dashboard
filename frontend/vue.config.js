const path = require(`path`)
const webpack = require(`webpack`)
const CSPWebpackPlugin = require(`csp-webpack-plugin`)

function resolve(dir) {
  return path.join(__dirname, dir)
}

const commitHash = require(`child_process`)
  .execSync(`git rev-parse HEAD`)
  .toString()
  .trim()

module.exports = {
  publicPath: `/`,
  transpileDependencies: ["viem", "abitype", "ox", "@noble/curves"],
  // chainWebpack: config => {
  //   config.module
  //     .rule("one-country-sdk-json")
  //     .test(/\.json$/)
  //     .include.add(path.resolve(__dirname, "node_modules/one-country-sdk/lib/esm/abi"))
  //     .end()
  //     .use("json-named-loader")
  //     .loader(path.resolve(__dirname, "json-named-loader.js"))
  //     .end();
  // },
  configureWebpack: () => {
    const config = {
      resolve: {
        fallback: {
          buffer: require.resolve("buffer/"),
          stream: require.resolve("stream-browserify"),
          assert: require.resolve("assert/"),
          crypto: require.resolve("crypto-browserify"),
          process: require.resolve("process/browser"),
          vm: require.resolve("vm-browserify")
        },
        alias: {
          src: resolve(`src`),
          "@": resolve(`src`),
          assets: resolve(`src/assets`),
          scripts: resolve(`src/scripts`),
          common: resolve(`src/components/common`),
          governance: resolve(`src/components/governance`),
          network: resolve(`src/components/network`),
          staking: resolve(`src/components/staking`),
          transactions: resolve(`src/components/transactions`),
          wallet: resolve(`src/components/wallet`),
          test: resolve(`test`),

          // Redirect the package root to the src folder
          "@ledgerhq/cryptoassets-evm-signatures": path.resolve(
            __dirname,
            "node_modules/@ledgerhq/cryptoassets-evm-signatures/src"
          ),
          "@ledgerhq/devices": path.resolve(
            __dirname,
            "node_modules/@ledgerhq/devices/src"
          ),
          "@ledgerhq/domain-service": path.resolve(
            __dirname,
            "node_modules/@ledgerhq/domain-service/src"
          ),
          "@ledgerhq/evm-tools": path.resolve(
            __dirname,
            "node_modules/@ledgerhq/evm-tools/src"
          )
        },
        extensions: [`.js`, `.vue`, `.css`]
      },
      plugins: [
        new webpack.ProvidePlugin({
          process: "process/browser"
        }),
        new webpack.ProvidePlugin({
          Buffer: ["buffer", "Buffer"]
        }),
        new webpack.DefinePlugin({
          "process.env": {
            NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            RELEASE: JSON.stringify(commitHash),
            MAX_ATTEMPTS: JSON.stringify(process.env.MAX_ATTEMPTS),
            MOCK_API_URL: JSON.stringify(process.env.MOCK_API_URL),
            DEFAULT_NETWORK: JSON.stringify(process.env.DEFAULT_NETWORK),
            DEFAULT_CHAIN_TITLE: JSON.stringify(
              process.env.DEFAULT_CHAIN_TITLE
            ),
            GOOGLE_ANALYTICS_UID: JSON.stringify(
              process.env.GOOGLE_ANALYTICS_UID
            )
          }
        }),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/)
      ]
    }

    // if (process.env.NODE_ENV === `production` && !process.env.E2E_TESTS) {
    //   config.plugins.push(
    //     // adds the content security policy to the index.html
    //     new CSPWebpackPlugin({
    //       "object-src": `'none'`,
    //       "base-uri": `'self'`,
    //       "default-src": `'self'`,
    //       "script-src": [`'self'`, `https://*.lunie.io`],
    //       "worker-src": `'none'`,
    //       "style-src": [`'self'`, `'unsafe-inline'`]
    //       // "connect-src": [
    //       //   // third party tools
    //       //   //`https://api-iam.intercom.io`,
    //       //   // mainnet
    //       //   `https://stargate.lunie.io`,
    //       //   `wss://rpc.lunie.io:26657`,
    //       //   `https://stargate.cosmos.network`,
    //       //   `wss://rpc.cosmos.network:26657`,
    //       //   ...[process.env.STARGATE].filter(x => x !== undefined),
    //       //   ...[process.env.RPC]
    //       //     .filter(x => x !== undefined)
    //       //     .map(x => x.replace("https", "wss"))
    //       // ],
    //       //"frame-src": [`'self'`, `https://api-iam.intercom.io`],
    //       //"img-src": [`'self'`, `https://www.google-analytics.com/`]
    //     })
    //   )
    // }

    return config
  },

  pluginOptions: {
    lintStyleOnBuild: false,
    stylelint: {},
    webpackBundleAnalyzer: {
      openAnalyzer: false
    }
  }
}
