import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import { getConvertRoutes } from "./utils";
import routers from "../../config/routers.js";
/**
 * 加载路由
 * @param {*} tenantNum
 */

export function convertRouter() {
  // const { routers } = mergeRouters();
  var convertRoutes = getConvertRoutes(routers);
  return convertRoutes;
}
export function getRouterData() {
  return _toConsumableArray(convertRouter());
}