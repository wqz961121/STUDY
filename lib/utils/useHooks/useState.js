import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useState, useCallback } from "react"; // 封装setState

export default function useSetState() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _useState = useState(initialState),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      set = _useState2[1];

  var setState = useCallback(function (newState) {
    set(function (prevState) {
      return _objectSpread({}, prevState, {
        newState: newState
      });
    });
  }, [set]);
  return [state, setState];
}