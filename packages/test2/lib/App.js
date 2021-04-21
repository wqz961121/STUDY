import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { getRouterData } from "./utils/router.js";
import "./uistyle.less";

function App() {
  var routers = getRouterData();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Suspense, {
    fallback: "\u6B63\u5728\u52A0\u8F7D\u4E2D"
  }, /*#__PURE__*/React.createElement(Switch, null, routers.map(function (route) {
    return /*#__PURE__*/React.createElement(Route, {
      path: route.path,
      component: lazy(function () {
        return import("".concat(route.component));
      }),
      exact: route.exact
    });
  }))));
}

export default App;