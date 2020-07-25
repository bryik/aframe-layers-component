const path = require("path");

module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    filename: "aframe-layers-component.js",
    path: path.resolve(__dirname, "dist"),
  },
};
