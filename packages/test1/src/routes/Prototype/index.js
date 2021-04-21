function Person(age, name) {
	this.age = age;
	this.name = name;
}
Person.prototype.sayName = function () {
	console.log(this.name)
}

var p1 = new Person('1', 'tom')
p1.sayName()
let x1 = p1.__proto__ === Person.prototype;
console.log(x1) //true
let x2 = Person.prototype.constructor === Person;
console.log(x2);

// 每个对象都有一个__proto__属性，并且指向它的prototype原型对象
// 每个构造函数都有一个prototype原型对象
// prototype原型对象里的constructor指向对象本身

//  属性如何继承

function Person2(name, age) {
	this.name = name;
	this.age = age;
}
Person2.prototype.getName = function () {
	console.log(console.log(this.name))
}

function Teacher(name, age, subject) {
	Person2.call(this, name, age)
	this.subject = subject;
}

var tea = new Teacher('jack', 25, 'Math')
console.log(tea);  // Teacher { name: 'jack', age: 25, subject: 'Math' }
// 属性的继承是通过在一个类内执行另外一个类的构造函数，
// 通过call指定this为当前执行环境，这样就可以得到另外一个类的所有属性。

// const fun=()=>{
// 	let a = {0:1, 1:3, 4:5};
// 	console.log(Array.isArray(a))
// 	console.log(typeof a)
// 	console.log(a.constructor)
// 	console.log(Object.prototype.toString.call(a))
// }
// fun();
// false
// object
// [Function: Object]
// [object Object]