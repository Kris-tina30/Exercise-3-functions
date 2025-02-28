// Exercise 2

// Write a function pow(x,n) that returns x in power n. Or, in other words,
// multiplies x by itself n times and returns the result.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1

//x - number;
//n - power;

// P.S. In this task, the function should support only the natural
// values of n: integers up from 1.

function pow(x, n) {
  let pow = 1;
  for (let i = 0; i < n; i++) {
    pow = pow * x;
  }
  return pow;
}
console.log(pow(2, 3));
