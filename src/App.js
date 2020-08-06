import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

import { getRouterData } from "./utils/router.js";
import './uistyle.less';
function App() {
  const routers = getRouterData();
  return (
    <>
        <Suspense fallback="正在加载中">
          <Switch>
            {routers.map((route) => (
              <Route
                path={route.path}
                component={lazy(() => import(`${route.component}`))}
                exact={route.exact}
              />
            ))}
          </Switch>
        </Suspense>
    </>
  );
}

export default App;
