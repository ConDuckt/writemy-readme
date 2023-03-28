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

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## Tests

${data["tests"]}

## License

${data["license"]}

## Questions

${data["questions"]}

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
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// 
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README