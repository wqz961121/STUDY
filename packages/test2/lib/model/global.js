import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import theme from "../../config/theme";
var defaultState = {
  name: "qq",
  age: 18,
  sex: "male",
  theme: theme
};
export default (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "global/update":
      return _objectSpread({}, state, action.payload);

    default:
      return state;
  }
});