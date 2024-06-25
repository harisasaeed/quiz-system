#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

function greet() {
    const title = chalk.blueBright.bold.italic("\t\t\n\t\t=== TypeScript Quiz ===\t\t\t\t\n");
    const welcomeMessage = chalk.redBright.underline("\t\t\n\t\tWelcome to Quiz System\t\t\t\t\n");
    return title + welcomeMessage;
}

console.log(greet());


async function waitFor(ms: number | undefined) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


await waitFor(1000); // Adding a 1-second delay as an example

console.log(chalk.yellow.bold("\t\nYou are required to gain maximum 5 points for the window.\n\t"));

let points = 0;

// Prompt for name
let name = await inquirer.prompt([
    {
        name: "username",
        message: "Enter your name:"
    }
]);

//////////////////////////Q1
let question1 = await inquirer.prompt([
    {
        name: "one",
        message: "\t\n\t\t\tTypescript is the superset of?\n",
        type: "list",
        choices: ["Python", "C++", "Javascript", "Java"]
    }
]);

if (question1.one == "Javascript") {
    console.log(chalk.blue.bold("\t\t\t\n\t\t\tYour answer is correct\n\t\t\t"));
    points++;
} else {
    console.log(chalk.red.bold("\t\t\t\n\t\t\tIncorrect answer\n\t\t\t"));
}

//////////////////////////Q2
let question2 = await inquirer.prompt([
    {
        name: "two",
        message: "\t\n\t\t\tWho's the founder of Microsoft?\n",
        type: "list",
        choices: ["Elon Musk", "Bill Gates", "Mark Zuckerberg", "Bernard Arnault"]
    }
]);

if (question2.two == "Bill Gates") {
    console.log(chalk.blue.bold("\t\t\t\n\t\t\tYour answer is correct\n\t\t\t"));
    points++;
} else {
    console.log(chalk.red.bold("\t\t\t\n\t\t\tIncorrect answer\n\t\t\t"));
}

let question3 = await inquirer.prompt([
    {
        name: "three",
        message: "\t\n\t\t\tWhich of the following is a benefit of using TypeScript?\n",
        type: "list",
        choices: ["Dynamic typing","Type safety","Less code to write", "No need for transpilation" ]
    }
]);

if (question3.three == "Type safety") {
    console.log(chalk.blue.bold("\t\t\t\n\t\t\tYour answer is correct\n\t\t\t"));
    points++;
} else {
    console.log(chalk.red.bold("\t\t\t\n\t\t\tIncorrect answer\n\t\t\t"));
}

let question4 = await inquirer.prompt([
    {
        name: "four",
        message: "\t\n\t\t\tWhich command is used to compile TypeScript to JavaScript?\n",
        type: "list",
        choices: ["tsc","npm start","node"," ts-run"]
    }
]);

if (question4.four == "tsc") {
    console.log(chalk.blue.bold("\t\t\t\n\t\t\tYour answer is correct\n\t\t\t"));
    points++;
} else {
    console.log(chalk.red.bold("\t\t\t\n\t\t\tIncorrect answer\n\t\t\t"));
}


let question5 = await inquirer.prompt([
    {
        name: "fifth",
        message: "\t\n\t\t\tHow do you define an interface in TypeScript?\n",
        type: "list",
        choices: ["class InterfaceName { }","interface InterfaceName { }","type InterfaceName { }"," interface { } InterfaceName"]
    }
]);

if (question5.fifth == "interface InterfaceName { }") {
    console.log(chalk.blue.bold("\t\t\t\n\t\t\tYour answer is correct\n\t\t\t"));
    points++;
} else {
    console.log(chalk.red.bold("\t\t\t\n\t\t\tIncorrect answer\n\t\t\t"));
}

////////////////////////////Q6

let question6 = await inquirer.prompt([
    {
        name: "six",
        message: "\t\n\t\t\tWhich of the following is not a TypeScript data type?\n",
        type: "list",
        choices: ["string","boolean","char","number"]
    }
]);

if (question6.six== "char") {
    console.log(chalk.blue.bold("\t\t\t\n\t\t\tYour answer is correct\n\t\t\t"));
    points++;
} else {
    console.log(chalk.red.bold("\t\t\t\n\t\t\tIncorrect answer\n\t\t\t"));
}

let question7 = await inquirer.prompt([
    {
        name: "seven",
        message: "\t\n\t\t\tHow do you specify the type of a function parameter in TypeScript?\n",
        type: "list",
        choices: ["fucntion func(name: string)","fucntion func(name)","fucntion func(name string)","fucntion func(name: 'string')"]
    }
]);

if (question7.seven== "fucntion func(name: string)") {
    console.log(chalk.blue.bold("\t\t\t\n\t\t\tYour answer is correct\n\t\t\t"));
    points++;
} else {
    console.log(chalk.red.bold("\t\t\t\n\t\t\tIncorrect answer\n\t\t\t"));
}

let question8 = await inquirer.prompt([
    {
        name: "eight",
        message: "\t\n\t\t\tWhat is the file extension used for TypeScript files?\n",
        type: "list",
        choices: ["js","java","ts","py"]
    }
]);

if (question8.eight== "ts") {
    console.log(chalk.blue.bold("\t\t\t\n\t\t\tYour answer is correct\n\t\t\t"));
    points++;
} else {
    console.log(chalk.red.bold("\t\t\t\n\t\t\tIncorrect answer\n\t\t\t"));
}


let question9 = await inquirer.prompt([
    {
        name: "nine",
        message: "\t\n\t\t\tWhich of the following is a correct way to declare a variable in TypeScript??\n",
        type: "list",
        choices: ["var name: string"," let name: string","name: string = 'John'","declare name: string"]
    }
]);

if (question9.nine== "var name: string") {
    console.log(chalk.blue.bold("\t\t\t\n\t\t\tYour answer is correct\n\t\t\t"));
    points++;
} else {
    console.log(chalk.red.bold("\t\t\t\n\t\t\tIncorrect answer\n\t\t\t"));
}

let question10 = await inquirer.prompt([
    {
        name: "ten",
        message: "\t\n\t\t\tWhat are the three main 'simple types' in TS?\n",
        type: "list",
        choices: ["Array,Object,Boolean"," Object,String,Number","Object,Array,Symbol","Boolean,Number,String"]
    }
]);

if (question10.ten== "Boolean,Number,String") {
    console.log(chalk.blue.bold("\t\t\t\n\t\t\tYour answer is correct\n\t\t\t"));
    points++;
} else {
    console.log(chalk.red.bold("\t\t\t\n\t\t\tIncorrect answer\n\t\t\t"));
}
if (points >= 5) {
    console.log(chalk.yellow.italic("\t\t\t\n\t\t\tCongratulations!\n\t\t\t"));
    console.log(`Your points: ${points}`);
} else {
    console.log(chalk.red.italic("\t\t\t\n\t\t\tYou lost! Try next time.\n\t\t\t"));
    console.log(`Your points: ${points}`);
}

console.log(chalk.magenta.bold(`\t\t\t\n\t\t\t\Thank you for playing: ${name.username}!\n\t\t\t`));
