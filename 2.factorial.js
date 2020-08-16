// Factorial of a number with iteration
function factorialIter(n) {
  var fact = 1n;
  for (var i = n; i >= 1; i--) {
    fact = fact * BigInt(i);
  }
  return fact;
}
console.log(factorialIter(10));

//Performance Check
// 


// Factorial of a number with Recussion
function factorialRecursion(n) {
  if (n <= 1) {
    return 1;
  } else {
    return BigInt(n) * BigInt(factorialRecursion(n - 1));
  }
}
console.log(factorialRecursion(10));
