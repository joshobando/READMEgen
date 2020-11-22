const fs = require("fs")
fs.writeFile("./")

const inquirer = require("inquirer");

inquirer
    .prompt([{
            type: "input",
            message: "What is your GitHub username?",
            name: "username",
            default: "joshobando",
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email",
            default: "joshua.obando98@gmail.com"
        },
        {
            type: "input",
            message: "What is your project's name?",
            name: "project",
        },
        {
            type: "input",
            message: "Please write a short description of your project",
            name: "description",
        },
        {
            type: "list",
            message: "What kind of license should your project have?",
            name: "license",
            choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
        },
        {
            type: "input",
            message: "What command should be run to install dependencies?",
            name: "install",
        },
        {
            type: "input",
            message: "What command should be run to run tests?",
            name: "run",
        },
        {
            type: "input",
            message: "What does the user need to know about using the repo?",
            name: "using"
        },
        {
            type: "input",
            message: "What does the user need to know about contributing to the repo?",
            name: "contributing",
        }
    ])

    .then((response) =>
        console.log(response)
    )