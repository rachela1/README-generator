// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const prompt = inquirer.createPromptModule();

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        message: 'Title of app',
        name: 'title',
    },
    {
        type:'input',
        message:'Table of Contents of README',
        name:'tableOfContents'
    },
    {
        type:'input',
        message:'Description of app',
        name:'description',
    },
    {
        type:'input',
        message: 'Installation of app',
        name: 'install'
    },
    {
        type:'input',
        message:'Contributions to app',
        name:'contributions',
    },
    {
        type:'input',
        message:'Tests',
        name:'tests',
    },
    {
        type:'input',
        message:'questions(contact info for consumer questions',
        name:'questions',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, generateMarkdown(data));
}
    
    // TODO: Create a function to initialize app
    function init() {
    prompt(questions).then((answers) => {
    const md = generateMarkdown(answers);
    writeToFile('output/README.md', answers) 
    console.log(md);
    });
}
    
    // Function call to initialize app
init();
