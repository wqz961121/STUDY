import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useState, useCallback, useEffect, useRef } from "react";
export default function useSetState() {
  var initState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _useState = useState(initState),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      set = _useState2[1];

  var isUpdate = useRef(null);
  var setState = useCallback(function (nextState, callback) {
    if (typeof callback === "function") {
      isUpdate.current = callback;
    }

    if (typeof nextState === "function") {
      set(function (prevState) {
        return _objectSpread({}, prevState, nextState(prevState));
      });
    } else {
      set(function (prevState) {
        return _objectSpread({}, prevState, nextState);
      });
    }
  }, [set]);
  useEffect(function () {
    if (isUpdate.current) {
      isUpdate.current(state);
    }
  }, [state]);
  return [state, setState];
}