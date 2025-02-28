// Exercise 2
let age = 6;
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("Do you have your parents permission to access this page?");
  }
}

// Rewrite it, to perform the same, but without if...else, and use the arrow function.

const checkAge2 = (age) => {
  return age > 18
    ? true
    : confirm("Do you have your parents permission to access this page?");
};
// console.log(checkAge2(age));

const checkAge3 = (age) => {
  age > 18 ||
    confirm("Do you have your parents permission to access this page?");
};
// console.log(checkAge3(age));
