import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import React from "react";
import { Link as ReactLink } from "react-router-dom";
export default function Link(props) {
  var linkProps = _objectSpread({}, props, {
    to: "".concat(props.to),
    target: "_blank"
  });

  return /*#__PURE__*/React.createElement(ReactLink, linkProps);
}