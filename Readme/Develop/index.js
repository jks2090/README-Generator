// array of questions for user
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require ('./utils/generateMarkdown');
const utility = require ('util');

inquirer
.prompt([
{
    type: "data",
    message: "what is the name of the project?",
    name: "title",
},
{
    type: "data",
    message: "give some installation instructions",
    name: "instructions",
},
{
    type: "data",
    message: "How do you intend for your code to be used?",
    name: "usage",
},
{
    type: "data",
    message: "What License do you wish to use",
    name: "license",
},
])
.then((data) => {
const generatedREADME = generateMarkdown (data);
fs.writeFile("GeneratedReadme.md", generatedREADME, (err) =>{
    if (err) throw err;
    console.log("generated readme");
});
});

