module.exports = {
  presets: [
    [
      "@vue/cli-plugin-babel/preset",
      {
        useBuiltIns: "entry"
      }
    ]
  ],
  plugins: [["@babel/transform-runtime"]]
}
