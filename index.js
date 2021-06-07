const generateHTML = require(`./src/generateHTML`);
const Manager = require(`./lib/Manager`);
const Engineer = require(`./lib/Engineer`);
const Intern = require(`./lib/Intern`); 
const fs = require(`fs`); 
const inquirer = require(`inquirer`);

const teamArray = []; 

// start of manager prompts 
const addManager = () => {
    return inquirer.prompt ([
        {
            type: `input`,
            name: `name`,
            message: `Please enter the name of the team manager.`, 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log (`Manager's name is required!`);
                    return false; 
                }
            }
        },
        {
            type: `input`,
            name: `id`,
            message: `Please enter the manger's ID.`,
            validate: id => {
                if  (isNaN(id)) {
                    console.log (`Managr's ID is requirerd!`)
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: `input`,
            name: `email`,
            message: `Please enter the manager's email.`,
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log (`Please enter a valid email address!`)
                    return false; 
                }
            }
        },
        {
            type: `input`,
            name: `officeNumber`,
            message: `Please enter the manager's office number.`,
            validate: officeNumber => {
                if  (isNaN(officeNumber)) {
                    console.log ('Please enter an office number!')
                    return false; 
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerInput => {
        const  { name, id, email, officeNumber } = managerInput; 
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager); 
        console.log(manager); 
    })
};

const addEmployee = () => {
    console.log(`
    ****************************
    Adding employees to the team
    ****************************
    `);

    return inquirer.prompt ([
        {
            type: `list`,
            name: `role`,
            message: `Please choose your employee's role.`,
            choices: [`Engineer`, `Intern`]
        },
        {
            type: `input`,
            name: `name`,
            message: `Please enter the name of your employee`, 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log (`Employee's name is required!`);
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: `Please enter the employee's ID.`,
            validate: id => {
                if  (isNaN(id)) {
                    console.log (`Employee's ID is requirerd!`)
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: `input`,
            name: `email`,
            message: `Please enter the employee's email.`,
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log (`Please enter a valid email address!`)
                    return false; 
                }
            }
        },
        {
            type: `input`,
            name: `github`,
            message: `Please enter the employee's GitHub username.`,
            when: (input) => input.role === `Engineer`,
            validate: github => {
                if (github ) {
                    return true;
                } else {
                    console.log (`Please enter the employee's github username!`)
                }
            }
        },
        {
            type: `input`,
            name: `school`,
            message: `Please enter the intern's school.`,
            when: (input) => input.role === `Intern`,
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log (`Please enter the intern's school!`)
                }
            }
        },
        {
            type: `confirm`,
            name: `addMoreMembers`,
            message: `Would you like to add another employee?`,
            default: false
        }
    ])
    .then(employeeData => {
        // data for employee types 

        let { name, id, email, role, github, school, addMoreMembers } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        teamArray.push(employee); 

        if (addMoreMembers) {
            return addEmployee(teamArray); 
        } else {
            return teamArray;
        }
    })

};


// function to generate HTML page file using file system 
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the profile has been created 
        } else {
            console.log(`Successfully created Team Profile!`)
        }
    })
}; 

addManager()
  .then(addEmployee)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });