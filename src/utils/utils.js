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

console.log(nest(comments)); // [ { id: 1, parent_id: null, children: [ [Object], [Object] ] } ]

console.log(typeof null) // object

console.log('a' + + 'b') // aNaN

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

// 用JSON深拷贝会有局限性，会忽略undefined,symbol类型数据,不能序列化函数,不能解决循环引用的对象.
// Symbel类型 Symbol 可以创建一个独一无二的值
// var a1 = Symbol('a')
// var a2 = Symbol('a')
// a1 !== a2 // true

// call, apply, bind的区别
// call和apply都是为了解决改变this的指向，作用相同，只是传参方式不同。
// 除第一个参数外，call可以接收一个参数列表，apply只接受一个参数数组。

// Map、FlatMap和Reduce
// Map作用是生成一个新数组，遍历原数组，将每个元素拿出来做一些变换然后append到新的数组中。
// FlatMap 和 map 的作用几乎是相同的，但是对于多维数组来说，会将原数组降维。可以将 FlatMap 看成是 map + flatten ，目前该函数在浏览器中还不支持。
const flatArr = [1 , [2, [3, 5]], 4];
const arr = flatArr.flatMap(v=>v+1)
console.log(arr); // [ 2, '2,3,51', 5 ]
// 多维数组彻底降维
const flattenDeep = (arr)=>Array.isArray(arr) ? arr.reduce((a, b)=>[...a, ...flattenDeep(b)], [])
: [arr]
const deepRes = flattenDeep([1, [[2], [3, [4]], 5]]);
console.log(deepRes)

// async函数 一个函数加上async，那么该函数就会返回一个Promise。
async function test(){
  return '111';
}
console.log(test()); // Promise { '111' }

// V8下的垃圾回收机制
// V8实现了准确式GC，GC算法采用了分代式垃圾回收机制。因此，V8将内存（堆）分为新生代和老生代。

// 浏览器

// 事件机制
// 事件触发三阶段
// 1.window往事件触发处传播，遇到注册的捕获事件会触发 
// 2.传播到事件触发处时触发注册事件
// 3.从事件触发处往window传播，遇到注册的冒泡事件会触发

// 事件代理（事件委托）
// 如果一个节点中的子节点是动态生成的，那么子节点需要注册事件的话应该注册在父节点上。
// 事件代理的方式相对于直接给目标注册事件来说 有以下优点：节省内存，不需要给子节点注销事件

// 跨域问题
// 浏览器同源策略: 如果协议、域名或者端口有一个不同就是跨域，Ajax请求会失败。
// 解决方法 1.JSONP 利用<script>标签没有跨域限制的漏洞，通过<script>标签指向一个需要访问的地址并提供一个回调函数来接收数据当需要通讯时。
// eslint-disable-next-line no-lone-blocks
{/* <script src="http://domain/api?param1=a&param2=b&callback=jsonp"></script>
<script>
    function jsonp(data) {
    	console.log(data)
	}
</script> */}
// JSONP使用简单且兼容性不错，但是只限于get请求。
// 2. CORS 需要浏览器和后端同时支持。IE 8 和 9 需要通过 XDomainRequest 来实现 
// 服务端设置 Access-Control-Allow-Origin 就可以开启 CORS。 该属性表示哪些域名可以访问资源，如果设置通配符则表示所有网站都可以访问资源。


