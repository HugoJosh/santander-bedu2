function power(base, exponent) {
  let num = base;
  if (base == 1) {
    console.log(num);
    return;
  }
  for (let i = 1; i < exponent; i++) {
    num = num * base;
  }
  console.log(num);
}
power(2, 3);

function getLergerInt(number1, number2) {
  if (typeof number1 !== "number" || typeof number2 !== "number") {
    return false;
  }
  return console.log(number2 > number1 ? number2 : number1);
}
getLergerInt(4, 7);

function fibonacciSequence(limit, imprimir = true) {
  let a = 0;
  if (limit > 0) {
    if (limit < 2) {
      a = 1;
    } else {
      a =
        fibonacciSequence(limit - 1, false) +
        fibonacciSequence(limit - 2, false);
    }
    if (imprimir) {
      fibonacciSequence(limit - 1);
      console.log(a);
    }
  }
  return a;
}
fibonacciSequence(7);

// arrow function con this