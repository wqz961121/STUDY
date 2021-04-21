var Com = function Com() {};

Com.prototype.data = {
  b: 1,
  c: 2
};
var A = new Com();
var B = new Com();
B.data.b = 'b';
console.log(A.data.b); // 'b'