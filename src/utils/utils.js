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
  if (window.less.modifyVars) {
    window.less.modifyVars({
      '@primary-color': color,
    });
  }
}

// 生成树结构

const comments = [
  { id: 1, parent_id: null },
  { id: 2, parent_id: 1 },
  { id: 3, parent_id: 1 },
  { id: 4, parent_id: 2 },
  { id: 5, parent_id: 4 }
];

const nest = (items = [], id = null, link = 'parent_id') =>
  items.filter(item => item[link] === id).map(item => ({ ...item, children: nest(items, item.id) }));

console.log(nest(comments));

console.log(typeof null)

console.log('a' + + 'b')

// 闭包
// 函数A返回了一个函数B，并且函数B中使用了函数A中的变量，函数B就被成为闭包
function A() {
  let a = 1;
  function B() {
    console.log(a);
  }
  return B();
}
A();

function loop() {
  for (var b = 1; b < 4; b++) {
    (function (c) {
      setTimeout(() => {
        console.log(c);
      }, 1000)
    })(b)
  }
}
loop();

// 浅拷贝方法
let a = { age: 1 };
let b = Object.assign({}, a);
a.age = 2;
console.log(b.age); // 1

let c = { age: 1 };
let d = { ...c };
c.age = 2;
console.log(d.age); // 1

// 深拷贝
let deepObj = {
  age: 1,
  jobs: {
    first: 'fe'
  }
}
let copy = {...deepObj}
let deepCopy = JSON.parse(JSON.stringify(deepObj));
deepObj.jobs.first='new';
console.log(copy.jobs.first); // new

console.log(deepCopy.jobs.first) // fe
