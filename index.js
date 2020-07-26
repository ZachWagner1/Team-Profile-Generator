const inquirer = require('inquirer');


const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-page.js');

const employeeDataArr = [];

// manager info -> array
const promptManager = () => {
    inquirer
        .prompt([
            {
				type    : 'input',
				name    : 'name',
				message : "Please enter the team manager's name"
			},
			{
				type    : 'input',
				name    : 'id',
				message : "Please enter the team manager's ID number"
			},
			{
				type    : 'input',
				name    : 'email',
				message : "Please enter the team manager's email address"
			},
			{
				type    : 'input',
				name    : 'officeNo',
				message : "Please enter the team manager's office number"
			}
        ])
        .then((data) => {
      const { name, id, email, officeNo } = data;
      const manager = new Manager(name, id, email, officeNo);
      const managerOutput = {
        role: manager.getRole(),
        name: manager.getName(),
        id: manager.getId(),
        email: manager.getEmail(),
        wildcard: manager.getOfficeNumber()
        }
        employeeDataArr.push(managerOutput);
        promptMenu();
    });
};

const promptMenu = () => {
	console.log(employeeDataArr);
	inquirer
		.prompt([
			{
			type: 'list',
			name: 'menuChoice',
			message: "Please enter the next team member's position or finish building your team",
			choices : [ 'Engineer', 'Intern', 'Finish' ]
			}
		])
		.then((data) => {
			if (data.menuChoice === 'Engineer') {
				promptEngineer();
			} else if (data.menuChoice === 'Intern') {
				promptIntern();
			} else {
        const pageHTML = generatePage(employeeDataArr);
        return writeFile(pageHTML)
          .then(writeFileResponse => {
              console.log(writeFileResponse);
              return copyFile();
            })
            .then(copyFileResponse => {
              console.log(copyFileResponse);
            })
            .catch(err => {
              console.log(err);
            });
		}
	});
};

const promptEngineer = () => {
	inquirer
		.prompt([
			{
				type    : 'input',
				name    : 'name',
				message : "Please enter the team engineer's name"
			},
			{
				type    : 'input',
				name    : 'id',
				message : "Please enter the team engineer's ID number"
			},
			{
				type    : 'input',
				name    : 'email',
				message : "Please enter the team engineer's email address"
			},
			{
				type    : 'input',
				name    : 'github',
				message : "Please enter the team engineer's Github username"
			}
		])
		.then((data) => {
			const { name, id, email, github } = data;
      const engineer = new Engineer(name, id, email, github);
      const engineerOutput = {
        role: engineer.getRole(),
        name: engineer.getName(),
        id: engineer.getId(),
        email: engineer.getEmail(),
        wildcard: engineer.getGithub()
      }
			employeeDataArr.push(engineerOutput);
			promptMenu();
		});
};

const promptIntern = () => {
	inquirer
		.prompt([
			{
				type    : 'input',
				name    : 'name',
				message : "Please enter the team intern's name"
			},
			{
				type    : 'input',
				name    : 'id',
				message : "Please enter the team intern's ID number"
			},
			{
				type    : 'input',
				name    : 'email',
				message : "Please enter the team intern's email address"
			},
			{
				type    : 'input',
				name    : 'school',
				message : "Please enter the team intern's school"
			}
		])
		.then((data) => {
	  const { name, id, email, school } = data;
      const intern = new Intern(name, id, email, school);
      const internOutput = {
        role: intern.getRole(),
        name: intern.getName(),
        id: intern.getId(),
        email: intern.getEmail(),
        wildcard: intern.getSchool()
      }
			employeeDataArr.push(internOutput);
			promptMenu();
		});
};

promptManager();