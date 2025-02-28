// Exercise 3

// Replace Function Expressions with arrow functions in the code:

const ask = (question, yes, no) => {
  confirm(question) ? yes() : no();
};

ask(
  "Do you agree?",
  () => {
    alert("You agreed.");
  },
  () => {
    alert("You canceled the execution.");
  }
);
