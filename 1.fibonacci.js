//Write an algorithm to print fibonancci series
// using iterative and recursions ?

// Fibonacci series 0,1,1,2,3,5,8,13 and so on

var start, end;

/************* Approach 1 *************/
function fibo_iter1(n) {
  var fibo = [];
  for (var i = 0; i < n; i++) {
    if (i < 2) fibo[i] = i;
    else fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}

// The Perfomance of the above Code --
// Number of Operations = 1 + (1+n+n+2+(n-2)+n) + 1
// Requires 4n + c operations
// as n grows number of operations grows sequentially as n
// Hence it falls under O(n)

var i1 = 99999;
start = Date.now();
var fibI1 = fibo_iter1(i1);
end = Date.now();
console.log(
  `Fibonacci Sequence - Iterative #1 for input ${i1} | cpu-time =  ${end -
    start}`
);

/************* Approach 2 *************/
function fibo_iter2(n) {
  var fibo = [];
  fibo[0] = 0;
  fibo[1] = 1;
  for (var i = 2; i < n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}

// The Perfomance of the above Code --
// Number of Operations = 1 + 1 + 1 + (1+n+n+n) + 1
// Requires 3n + c operations
// as n grows number of operations grows sequentially as n
// Hence it falls under O(n)

var i2 = 99999;
start = Date.now();
var fibI2 = fibo_iter2(i2);
end = Date.now();
console.log(
  `Fibonacci Sequence - Iterative #2 for input ${i2} | cpu-time = ${end -
    start}`
);
/************* Approach 3 *************/
function fibor1(num) {
  var arr = [];
  arr[0] = 0;
  arr[1] = 1;
  function fibo_recr(n) {
    if (n > 2) {
      var len = arr.length;
      arr.push(arr[len - 1] + arr[len - 2]);
      fibo_recr(n - 1);
    }
  }
  fibo_recr(num);
  return arr;
}

// The Perfomance of the above Code --
// Number of Operations = 1 + 1 + 1 + f(1+1+1+f(n-2)) + 1
// Requires 4n + c operations
// as n grows number of operations grows sequentially as n
// Hence it falls under O(n)

var r1 = 6000;
start = Date.now();
var fibR1 = fibor1(6000);
end = Date.now();
console.log(
  `Fibonacci Sequence - Recursive #1 for input ${r1}  | cpu-time = ${end -
    start}`
);

//console.log("Fibonacci Sequence - Recursive #1      - ", getFibonacci(5));

/************* Approach 4 *************/
function fibor2(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibor2(n - 1) + fibor2(n - 2);
  }
}

/*
var rarr = [];
for (var i = 0; i < 5; i++) {
  rarr.push(fibor2(i));
}
*/
// The Perfomance of the above Code --
// Number of Operations = 1 + 1 + 1 + f(1+1+1+f(n-2)) + 1
// Requires 4n + c operations
// as n grows number of operations grows sequentially as n
// Hence it falls under O(n)

start = Date.now();
var rarr = [];
var r2 = 40;
for (var i = 0; i < r2; i++) {
  rarr.push(fibor2(i));
}
end = Date.now();
console.log(
  `Fibonacci Sequence - Recursive #2 for input ${r2} | cpu-time = ${end -
    start}`
);

// console.log("Fibonacci Sequence - Recursive #2      - ", rarr);
console.log("Fibonacci Sequence - Recursive #2 (SUM)- ", fibor2(5));
