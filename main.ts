#! /usr/bin/env node

import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter Your firstNumber", type: "number", name: "firstNumber" },
  { message: "enter Your secondNumber", type: "number", name: "secondNumber" },
  {
    message: "Select One operators In List",
    type: "list",
    name: "operators",
    choices: [
      "Addition",
      "Substraction",
      "Multiplication",
      "Division",
      "Reminder",
    ],
  },
]);
if (answer.operators === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operators === "Substraction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operators === "Multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operators === "Division") {
  console.log(answer.firstNumber / answer.secondNumber);
} else if (answer.operators === "Reminder") {
  console.log(answer.firstNumber % answer.secondNumber);
} else {
  console.log("incorrect");
}
