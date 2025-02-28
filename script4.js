// Exercise 4

// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.

let calculator = {
  read() {
    this.val1 = Number(prompt("Enter the first number:"));
    this.val2 = Number(prompt("Enter the second number:"));
  },
  sum() {
    return this.val1 + this.val2;
  },
  mul() {
    return this.val1 * this.val2;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
