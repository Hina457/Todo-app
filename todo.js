#!/usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addtask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What you want to add in your todos?",
        },
        {
            name: "addmore",
            type: "confirm",
            message: "Do you want to add more?",
            default: "false",
        }
    ]);
    let optionAns = await inquirer.prompt([
        {
            name: "Delete",
            type: "list",
            message: "Which action do you want to perform?",
            choices: ["add", "Edit", "Delete"]
        }
    ]);
    console.log(optionAns);
    todos.push(addtask.todo);
    condition = addtask.addmore;
    console.log(todos);
}
