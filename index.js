const inquirer = require('inquirer');
const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

//array for the team
const teamList = []

function launch() {

    function employeePrompt() {
        inquirer.prompt([{
            type: 'list',
            message: "Please select and employee type from the list below",
            choices: ['Manager', 'Engineer', 'Intern'],
            name: 'employeeType'
        }])
            .then(function (userInput) {
                // console.log(userInput)
                switch (userInput.employeeType) {
                    case "Manager":
                        addManager()
                        break;
                    case "Engineer":
                        console.log('engineer')
                        break;
                    case "Intern":
                        console.log('intern')
                        break;
                }

            })
    }

    function addManager() {
        inquirer.prompt([{
            type: 'input',
            message: 'Please enter the name of manager',
            name: "managerName"
        },
        {
            type: 'input',
            message: 'Please enter ID',
            name: 'managerId'
        },
        {
            type: 'input',
            message: 'email',
            name: 'managerEmail'
        },
        {
            type: 'input',
            message: 'office number',
            name: 'managerOfficeNumber'
        }
        ])
            .then(function (responses) {
                console.log(responses)
                //run manager custructor
                //push new manager into team array
                nextQuestion()
                // call funstion asking user what they want to do next
            })
    }
    function nextQuestion() {
        function employeePrompt() {
            inquirer.prompt([{
                type: 'list',
                message: "What would you like to do now?",
                choices: ['Add Manager', 'Add Engineer', 'Add Intern', 'Finish'],
                name: 'nextPrompt'
            }])
                .then(function (userInput) {
                    // console.log(userInput)
                    switch (userInput.nextPrompt) {
                        case "Add Manager":
                            addManager()
                            break;
                        case "Add Engineer":
                            console.log('engineer')
                            break;
                        case "Add Intern":
                            console.log('this intern')
                            break;
                        case 'Finish':
                            console.log('finished')
                            break;
                    }

                })
        }
    }

    employeePrompt()
}
//create a team
//prompt
//name
//choices


//add a manager prompt
//name
//id
//email
//office number
//then add in a manager const

//add an engineer
//name
//id
//email
//github name

//add an intern
//name
//id
//email
//school

// add an html builder

launch()