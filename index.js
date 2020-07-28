const inquirer = require("inquirer");
const fs = require('fs'); 

//Array of questions

const questions = [
    {
        type: "input",
        name: "# Title",
        message: "What is your README name?"
    },
    {
        type: "input",
        name: "# Description",
        message: "What is your description of this file?"
    },
    {
        type: "input",
        name: "# Contents",
        message: "List your table of contents:",
    },
    {
        type: "input",
        name: "# Installation",
        message: "What are the required files to install?"
    },
    {
        type: "list",
        name: "# License",
        message: "Please select your license:",
        choices: ['https://img.shields.io/badge/License-SPCE-blue','https://img.shields.io/badge/License-MIT-blue','https://img.shields.io/badge/License-COIN-green'],

    },
    {
        type: "input",
        name: "# Usage",
        message: "How would you use this?"
    },
    {
        type: "input",
        name: "# Test",
        message: "Are there any test versions?"
    },
    {
        type: "input",
        name: "# Questions",
        message: "Please provide a link to your Github page:"   
    },
    {
        type: "input",
        name: "# Info",
        message: "Additional questions? Please provide your email:"
    }
]

//Ask the questions then writes your answer into a file

inquirer.prompt(questions).then(function(data) {
    
    var filename = "README.md";

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(error) {

        if (error) {
            return console.log(error);
        }

        console.log("Success!");
    })
});