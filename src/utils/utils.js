// import routers from "../../config/routers.js";
import qs from 'qs';

/**
 * 数组去重
 * @param {*} array 数据
 * @param {*} key 去重纬度
 */
export function uniqBykey(array = [], key = "") {
  const obj = {};
  const newList = array.reduce((cur, next) => {
    if (!obj[`${next?.[key]}`]) {
      obj[`${next?.[key]}`] = true;
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
  const convertRoutes = devRouters
    .filter((r) => !!r.component)
    .map((route) => ({
      ...route,
      component: `./routes/${route.component}`,
    }));
  return convertRoutes;
}

// 把参数拼接到url
export function generateUrlWithGetParam(url, params) {
  let newUrl = url;
  if (params && Object.keys(params).length >= 1) {
    const newParams = params;
    if (Object.keys(newParams).length >= 1) {
      newUrl += `${url.indexOf("?") >= 0 ? "&" : "?"}${qs.stringify(newParams)}`;
    }
  }
  return newUrl;
}

// 修改颜色
export function changeVarColor(color) {
  if(window.less.modifyVars){
    window.less.modifyVars({
      '@primary-color': color,
    });
  }
}
