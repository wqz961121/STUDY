// // import routers from "../../config/routers.js";
// import qs from "qs";

// /**
//  * 数组去重
//  * @param {*} array 数据
//  * @param {*} key 去重纬度
//  */
// export function uniqBykey(array = [], key = "") {
//   const obj = {};
//   const newList = array.reduce((cur, next) => {
//     if (!obj[`${next?.[key]}`]) {
//       obj[`${next?.[key]}`] = true;
//       cur.push(next);
//     }
//     return cur;
//   }, []);
//   return newList;
// }

// /**
//  * 返回路由data
//  * @param {*} devRouters 合并后的路由
//  */
// export function getConvertRoutes(devRouters) {
//   const convertRoutes = devRouters
//     .filter((r) => !!r.component)
//     .map((route) => ({
//       ...route,
//       component: `./routes/${route.component}`,
//     }));
//   return convertRoutes;
// }

// // 把参数拼接到url
// export function generateUrlWithGetParam(url, params) {
//   let newUrl = url;
//   if (params && Object.keys(params).length >= 1) {
//     const newParams = params;
//     if (Object.keys(newParams).length >= 1) {
//       newUrl += `${url.indexOf("?") >= 0 ? "&" : "?"}${qs.stringify(
//         newParams
//       )}`;
//     }
//   }
//   return newUrl;
// }

// // 修改颜色
// export function changeVarColor(color) {
//   if (window.less.modifyVars) {
//     window.less.modifyVars({
//       "@primary-color": color,
//     });
//   }
// }

// // 在条件判断时，除了undenfined, null, false, NaN, '',  0, -0,
// // 其他所有值都转为ture,包括所有对象。

// // 生成树结构
// const comments = [
//   { id: 1, parent_id: null },
//   { id: 2, parent_id: 1 },
//   { id: 3, parent_id: 1 },
//   { id: 4, parent_id: 2 },
//   { id: 5, parent_id: 4 },
// ];

// const nest = (items = [], id = null, link = "parent_id") =>
//   items
//     .filter((item) => item[link] === id)
//     .map((item) => ({ ...item, children: nest(items, item.id) }));

// console.log(nest(comments)); // [ { id: 1, parent_id: null, children: [ [Object], [Object] ] } ]

// console.log(typeof null); // object

// console.log("a" + +"b"); // aNaN

// // 闭包
// // 函数A返回了一个函数B，并且函数B中使用了函数A中的变量，函数B就被成为闭包
// function A() {
//   let a = 1;
//   function B() {
//     console.log(a);
//   }
//   return B();
// }
// A();

// function loop() {
//   for (var b = 1; b < 4; b++) {
//     (function(cc) {
//       setTimeout(() => {
//         console.log(cc);
//       }, 1000);
//     })(b);
//   }
// }
// loop();

// // 浅拷贝方法
// let a = { age: 1 };
// let b = Object.assign({}, a);
// a.age = 2;
// console.log(b.age); // 1

// let c = { age: 1 };
// let d = { ...c };
// c.age = 2;
// console.log(d.age); // 1

// // 深拷贝
// let deepObj = {
//   age: 1,
//   jobs: {
//     first: "fe",
//   },
// };
// let copy = { ...deepObj };
// let deepCopy = JSON.parse(JSON.stringify(deepObj));
// deepObj.jobs.first = "new";
// console.log(copy.jobs.first); // new

// console.log(deepCopy.jobs.first); // fe

// // 用JSON深拷贝会有局限性，会忽略undefined,symbol类型数据,不能序列化函数,不能解决循环引用的对象.
// // Symbel类型 Symbol 可以创建一个独一无二的值
// // var a1 = Symbol('a')
// // var a2 = Symbol('a')
// // a1 !== a2 // true

// // call, apply, bind的区别
// // call和apply都是为了解决改变this的指向，作用相同，只是传参方式不同。
// // 除第一个参数外，call可以接收一个参数列表，apply只接受一个参数数组。

// // Map、FlatMap和Reduce
// // Map作用是生成一个新数组，遍历原数组，将每个元素拿出来做一些变换然后append到新的数组中。
// // FlatMap 和 map 的作用几乎是相同的，但是对于多维数组来说，会将原数组降维。可以将 FlatMap 看成是 map + flatten ，目前该函数在浏览器中还不支持。
// const flatArr = [1, [2, [3, 5]], 4];
// const arr = flatArr.flatMap((v) => v + 1);
// console.log(arr); // [ 2, '2,3,51', 5 ]
// // 多维数组彻底降维
// const flattenDeep = (arr) =>
//   Array.isArray(arr)
//     ? arr.reduce((a, b) => [...a, ...flattenDeep(b)], [])
//     : [arr];
// const deepRes = flattenDeep([1, [[2], [3, [4]], 5]]);
// console.log(deepRes);

// // async函数 一个函数加上async，那么该函数就会返回一个Promise。
// async function test() {
//   return "111";
// }
// console.log(test()); // Promise { '111' }

// console.log(["1", "2", "3"].map(parseInt)); // [ 1, NaN, NaN ]

// console.log(
//   (function(x, f = () => x) {
//     var x;
//     let y = x;
//     x = 2;
//     return [x, y, f()];
//   })(1)
// );
// // [2,1,1]

// var foo = { n: 1 };
// var bar = foo;
// foo.x = foo = { n: 2 };
// console.log(foo.x);
// console.log(bar.x);
// // undefined { n: 2 }

// var ar = Array.of(1, 1, 1).fill([]);
// ar[0].push(5);
// console.log(ar);
// // [[5], [5], [5]]
// var x = [[], [], []];
// x[0].push(1);
// console.log(x);

// console.log(typeof null); // object

// // V8下的垃圾回收机制
// // V8实现了准确式GC，GC算法采用了分代式垃圾回收机制。因此，V8将内存（堆）分为新生代和老生代。

// // 浏览器

// // 事件机制
// // 事件触发三阶段
// // 1.window往事件触发处传播，遇到注册的捕获事件会触发
// // 2.传播到事件触发处时触发注册事件
// // 3.从事件触发处往window传播，遇到注册的冒泡事件会触发

// // 事件代理（事件委托）
// // 如果一个节点中的子节点是动态生成的，那么子节点需要注册事件的话应该注册在父节点上。
// // 事件代理的方式相对于直接给目标注册事件来说 有以下优点：节省内存，不需要给子节点注销事件

// // 跨域问题
// // 浏览器同源策略: 如果协议、域名或者端口有一个不同就是跨域，Ajax请求会失败。
// // 解决方法 1.JSONP 利用<script>标签没有跨域限制的漏洞，通过<script>标签指向一个需要访问的地址并提供一个回调函数来接收数据当需要通讯时。
// // eslint-disable-next-line no-lone-blocks
// {
//   /* <script src="http://domain/api?param1=a&param2=b&callback=jsonp"></script>
// <script>
//     function jsonp(data) {
//     	console.log(data)
// 	}
// </script> */
// }
// // JSONP使用简单且兼容性不错，但是只限于get请求。
// // 2. CORS 需要浏览器和后端同时支持。IE 8 和 9 需要通过 XDomainRequest 来实现
// // 服务端设置 Access-Control-Allow-Origin 就可以开启 CORS。 该属性表示哪些域名可以访问资源，如果设置通配符则表示所有网站都可以访问资源。

// // Event loop

// // 不同的任务源会被分配到不同的Task队列中，任务源可以分为微任务和宏任务，在es6规范中，微任务称为jobs，宏任务称为task。

// console.log("script start");
// setTimeout(function() {
//   console.log("setTimeout");
// }, 0);

// console.log("Promise");
// new Promise((resolve) => {
//   resolve();
// })
//   .then(function() {
//     console.log("promise1");
//   })
//   .then(function() {
//     console.log("promise2");
//   });

// console.log("script end");
// // script start => Promise => script end => promise1 => promise2 => setTimeout

// // 微任务包括process.nextTick,promise,Object.observe,MutationObserver
// // 宏任务包括script.setTimeout,setInterval,setImmediate,I/O,UI rendering。

// // 手动实现一个bind函数

// Function.prototype.myBind = function(context) {
//   if (typeof this !== "function") {
//     throw new TypeError("Error");
//   }
//   var _this = this;
//   var args = [...arguments].slice(1);
//   console.log(arguments);
//   console.log(context);
//   return function F() {
//     if (this instanceof F) {
//       return new _this(...args, ...arguments);
//     }
//     return _this.apply(context, args.concat(...arguments));
//   };
// };

// function aa() {
//   console.log(1);
// }
// aa.myBind(this, { e: 1 })();

// // 手动实现Promise

// function myPromise(constructor) {
//   let self = this;
//   self.status = "pending";
//   self.value = undefined; // 定义状态为resolved的时候的状态
//   self.reason = undefined; // 定义状态为rejected的时候的状态
//   function resolve(value) {
//     if (self.status === "pending") {
//       self.value = value;
//       self.status = "resolved";
//     }
//   }
//   function reject(reason) {
//     if (self.status === "pending") {
//       self.reason = reason;
//       self.status = "rejected";
//     }
//   }
//   // 捕获构造异常
//   try {
//     constructor(resolve, reject);
//   } catch (e) {
//     reject(e);
//   }
// }
// myPromise.prototype.then = function(onFullfilled, onRejected) {
//   let self = this;
//   switch (self.status) {
//     case "resolved":
//       onFullfilled(self.value);
//       break;
//     case "rejected":
//       onRejected(self.reason);
//       break;
//     default:
//   }
// };

// const PENDING = "pendind";
// const RESOLVED = "resolved";
// const REJECTED = "rejected";
// // promise接收一个函数参数，该函数会立即执行
// // function MyPromise(fn) {
// //   let _this = this;
// //   _this.currentState = PENDING;
// //   _this.value = undefined;
// //   // 用于保存then中的回调，只要当promise状态为pending时才会缓存，并且每个实例至多缓存一个
// //   _this.resolvedCallbacks = [];
// //   _this.rejectedCallbacks = [];

// //   _this.resolve = function (value) {
// //     if (value instanceof MyPromise) {
// //       return value.then(_this.resolve, _this.reject)
// //     }
// //     setTimeout(() => {
// //       if (_this.currentState === PENDING) {
// //         _this.currentState = RESOLVED;
// //         _this.value = value;
// //         _this.resolvedCallbacks.forEach(cb => cb());
// //       }
// //     })
// //   };

// //   _this.reject = function (reason) {
// //     setTimeout(() => {
// //       if (_this.currentState === PENDING) {
// //         _this.currentState = REJECTED;
// //         _this.value = reason;
// //         _this.rejectedCallbacks.forEach(cb => cb());
// //       }
// //     })
// //   }
// //   try {
// //     fn(_this.resolve, _this.reject);
// //   } catch (e) {
// //     _this.reject(e);
// //   }

// //   MyPromise.prototype.then = function (onResolved, onRejected) {
// //     var self = this;
// //     var promise2;
// //     onResolved = typeof onResolved === 'function' ? onResolved : v => v;
// //     onRejected = typeof onRejected === 'function' ? onRejected : r => throw r;
// //   }
// // }

// async function async1() {
//   console.log("async1 start");
//   Promise.resolve(async2()).then(() => {
//     console.log("async1 end");
//   });
// }
// async function async2() {
//   console.log("async2");
//   Promise.resolve(async3()).then(() => {
//     console.log(123);
//   });
// }
// async function async3() {
//   console.log("async3");
//   Promise.resolve(async4()).then(() => {
//     console.log(456);
//   });
// }
// async function async4() {
//   await console.log("async4");
//   console.log(789);
// }
// console.log("script start");
// setTimeout(function() {
//   console.log("setTimeout");
// }, 0);
// async1();
// new Promise(function(resolve) {
//   console.log("promise1");
//   resolve();
// }).then(function() {
//   console.log("promise2");
// });
// console.log("script end");

// // script start
// // async1 start
// // async2
// // async3
// // async4
// // promise1
// // script end
// // 789
// // 123
// // async1 end
// // promise2
// // 456
// // setTimeout

// // URL的输入到浏览器解析的一系列事件
// // 1. 浏览器中输入网址
// // 2. 域名解析（DNS），找到IP服务器
// // 3. 发起TCP连接，HTTP三次握手，发送请求（Request）
// // 4. 服务器响应HTTP（Response）
// // 5. 浏览器下载资源html css js images 等
// // 6. 浏览器解析代码（如果服务器有gzip压缩，浏览器先解压）
// // 7. 浏览器渲染呈现给用户

// // 实现图片懒加载思路
// // 1.判断图片所在位置是否在可视区内。
// // offsetTop<clientHeight+scrollTop
// // element.getBoundingClientRect().top<clientHeight

// // 比typeOf更好的类型判断的方法 Object.prototype.toString.call();

// async function asyn() {
//   await console.log('1');
//   console.log('3');
// }
// asyn();
// console.log('2')

// function fn(){
//   // return new Promise(resolve=>{
//       console.log('1')
//   // })
// }
// async function f1(){
//   await fn()
//   console.log(2)
// }
// f1()
// console.log(3)


// var a = function c(){
//   console.log(typeof c);
// }
// a(); // function 

// var f = function g(){ 
//   return 23; 
// };
// typeof g(); // error
// 在采用函数表达式声明函数时,function后面通常是不带函数名的，若加上函数名（如题目),
// 则该函数只在函数体内有效，指代函数表达式本身，在函数体外无效，表现为未声明。