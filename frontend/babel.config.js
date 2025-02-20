module.exports = {
  presets: [
    [
      "@vue/cli-plugin-babel/preset",
      {
        useBuiltIns: "usage",
        corejs: 3,
        targets: {
          node: "16.20.2",
          browsers: [
            "last 2 Chrome versions",
            "last 2 Firefox versions",
            "last 2 Safari versions",
            "last 2 Edge versions"
          ]
        }
      }
    ]
  ],
  plugins: [["@babel/transform-runtime"]]
}
