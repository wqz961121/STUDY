import { getConvertRoutes } from "./utils";
import routers from "../../config/routers.js";

/**
 * 加载路由
 * @param {*} tenantNum
 */
export function convertRouter() {
  // const { routers } = mergeRouters();
  const convertRoutes = getConvertRoutes(routers);
  return convertRoutes;
}

export function getRouterData() {
  return [...convertRouter()];
}
