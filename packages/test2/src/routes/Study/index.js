var Com = function(){};
Com.prototype.data={b:1,c:2};

let A = new Com();
let B = new Com();
B.data.b='b';
console.log(A.data.b); // 'b'