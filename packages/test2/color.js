const path = require("path");
const { generateTheme } = require("antd-theme-generator");

const options = {
  stylesDir: path.join(__dirname, "./src/utils"),
  antDir: path.join(__dirname, "node_modules/antd"),
  varFile: path.join(__dirname, "./src/variables.less"),
  mainLessFile: path.join(__dirname, "./src/index.less"),
  themeVariables: ["@primary-color"],
  indexFileName: "index.html",
  outputFilePath: path.join(__dirname, "./public/color.less"),
};

generateTheme(options)
  .then(() => {
    console.log("Theme generated successfully");
  })
  .catch((err) => {
    console.log("error", err);
  });
