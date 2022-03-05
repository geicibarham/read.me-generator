const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');



inquirer
    .prompt([
       
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a brief description on your project'
        },

    //   table starts here
        {
            type: 'input',
            name: 'instalation',
            message: 'How can the user install your program?',

        },

        {
            type: 'input',
            name: 'usage',
            message: 'Provide description on how to use the program',

        },

        {
            type: 'input',
            name: 'contribute',
            message: 'How can the user contribute to your program?',

        },

        {
            type: 'input',
            name: 'tests',
            message: 'Please enter tests instructions for your project',

        },


        {
            type: 'list',
            name: 'license',
            message: 'What kind of license would you like to use ?',
            choices: ["MIT", "wtfpl", "GPLv2",],
        },

    
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your github username',

        },

        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email adress '},
        ])

        .then((answers) => {
          
    var readmeContent = generateMarkdown(answers);
   

            fs.writeFile("READ.md" , readmeContent,
             err => {
                if(err) {
                    console.log(err);
                    
                }
                console.log('Your read me was generated');
            }
            )})
    

