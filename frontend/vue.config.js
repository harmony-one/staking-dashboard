const path = require(`path`)
const webpack = require(`webpack`)
const CspHtmlWebpackPlugin = require("csp-html-webpack-plugin")

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

    if (process.env.NODE_ENV === `production` && !process.env.E2E_TESTS) {
      // config.plugins.push(
      //   // adds the content security policy to the index.html
      //   // new HtmlWebpackPlugin(),
      //   // new CspHtmlWebpackPlugin(
      //   //   {
      //   //     "object-src": [`'none'`, "chrome-extension://*"],
      //   //     "base-uri": [`'self'`, "chrome-extension://*"],
      //   //     "worker-src": [`'none'`, "chrome-extension://*"],
      //   //     "default-src": ["*", "chrome-extension://*"],
      //   //     "script-src": [
      //   //       "*",
      //   //       "'unsafe-inline'",
      //   //       "'unsafe-eval'",
      //   //       "chrome-extension://*"
      //   //     ],
      //   //     "style-src": ["*", "'unsafe-inline'", "chrome-extension://*"],
      //   //     "connect-src": ["*", "chrome-extension://*"],
      //   //     "img-src": ["*", "data:", "chrome-extension://*"],
      //   //     "font-src": ["*", "chrome-extension://*"]
      //   //   },
      //   //   {
      //   //     nonceEnabled: { "style-src": false },
      //   //     hashEnabled: { "script-src": false, "style-src": false }
      //   //   }
      //   // )
      // )
    }

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
