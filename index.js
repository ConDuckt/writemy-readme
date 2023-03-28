// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
    type: "input",
    name: "title",
    message: "Enter a title for your project:",
    },
    {
        type: "input",
        name: "description",
        message: "Enter a brief description for your project:",
    },
    {
        type: "input",
        name: "installation",
        message: "Provide installation instructions for your project:",
    },
    {
        type: "input",
        name: "usage",
        message: "Provide usage instructions for your project:",
    },
    {
        type: "input",
        name: "contributing",
        message: "Provide information on how others may contribute to the project:",
    },
    {
        type: "input",
        name: "tests",
        message: "Enter any tests you've run on your project:",
    },
    {
        type: "input",
        name: "questions",
        message: "Enter an email contact for questions a user may have:",
    },
    {
        type: "input",
        name: "license",
        message: "Enter license information for your project:",
    },
    {
        type: "input",
        name: "github-username",
        message: "Enter your GitHub username:",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
const readme = `

# ${data["title"]}

${data["description"]}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

## Installation

${data["installation"]}

## Usage

${data["usage"]}

## Contributing

${data["contributing"]}

## Tests

${data["tests"]}

## License

${data["license"]}

## Questions

[Click here](https://github.com/${data["github-username"]}) to contact me on GitHub. 

Alternatively, you may reach me at ${data["questions"]}.

`;
    
    fs.writeFile(fileName, readme, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("README file generated successfully!");
        };
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("README.md", data);
    });
};

// Function call to initialize app
init();

// TODO:

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
