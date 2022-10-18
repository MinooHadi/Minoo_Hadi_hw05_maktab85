function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree ?",
  function () {
    alert("You agreed.");
  },
  function () {
    alert("You canceled the execution.");
  }
);

// solution
ask(
  "Do you agree ?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);



// solution 2 - rewrite callback and ask functions as arrow functions

let arrowAsk = (question, yes, no) => confirm(question) ? yes(): no()

arrowAsk("Do you agree ?",
() => alert("You agreed."),
() => alert("You canceled the execution."))