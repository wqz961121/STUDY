import replacer from "webpack-theme-color-replacer/client";
import colors from "../colors";
export default function changeAllColor(code) {
  var newColors = colors[code];
  var options = {
    newColors: Object.values(newColors)
  };
  replacer.changer.changeColor(options, Promise).then(function () {});
}