const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");



// const promptUser = () => 
    inquirer.prompt([
    {    
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
        default: "joshobando",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
        default: "joshua.obando98@gmail.com",
    },
    {
        type: "input",
        message: "What is your project's name?",
        name: "project",
        default: "READMEgen homework",
    },
    {
        type: "input",
        message: "Please write a short description of your project",
        name: "description",
        default: "Very descrptive description"
    },
    {
        type: "list",
        message: "What kind of license should your project have?",
        name: "license",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
        default: "None",
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "install",
        default: "npm i inquirer",
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "run",
        default: "node logic.js",
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "using",
        default: "I did my homework"
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "contributing",
        default: "Not sure yet",
    },
    ]);

function writetofile(READMEgen, data) {
    fs.writeFile(READMEgen, data, error => {
        if (error) {
            return (error);
        }
    });
}

fs.appendFile()

const writeFileAsync = util.promisify(fs.writeFile);