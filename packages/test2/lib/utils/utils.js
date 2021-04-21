import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
// import routers from "../../config/routers.js";
import qs from "qs";
/**
 * 数组去重
 * @param {*} array 数据
 * @param {*} key 去重纬度
 */

export function uniqBykey() {
  var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var obj = {};
  var newList = array.reduce(function (cur, next) {
    if (!obj["".concat(next === null || next === void 0 ? void 0 : next[key])]) {
      obj["".concat(next === null || next === void 0 ? void 0 : next[key])] = true;
      cur.push(next);
    }

    return cur;
  }, []);
  return newList;
}
/**
 * 返回路由data
 * @param {*} devRouters 合并后的路由
 */

export function getConvertRoutes(devRouters) {
  var convertRoutes = devRouters.filter(function (r) {
    return !!r.component;
  }).map(function (route) {
    return _objectSpread({}, route, {
      component: "./routes/".concat(route.component)
    });
  });
  return convertRoutes;
} // 把参数拼接到url

export function generateUrlWithGetParam(url, params) {
  var newUrl = url;

  if (params && Object.keys(params).length >= 1) {
    var newParams = params;

    if (Object.keys(newParams).length >= 1) {
      newUrl += "".concat(url.indexOf("?") >= 0 ? "&" : "?").concat(qs.stringify(newParams));
    }
  }

  return newUrl;
} // 修改颜色

export function changeVarColor(color) {
  if (window.less.modifyVars) {
    window.less.modifyVars({
      "@primary-color": color
    });
  }
}