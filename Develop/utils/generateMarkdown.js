
const fs = require('fs');
const index = require('../index');

const generateMarkdown = answers => {
  let badgeLicense = ""

  if (answers.license == "MIT") {
    badgeLicense = `[![license](https://img.shields.io/badge/license-${answers.license}-success)](https://opensource.org/licenses/MIT)`

  }else if (answers.license == "wtfpl") {
    badgeLicense = `[![license](https://img.shields.io/badge/license-${answers.license}-blueviolet)](http://www.wtfpl.net/)`
  }
  else if (answers.license == "GPLv2") {
    badgeLicense = `[![license](https://img.shields.io/badge/license-${answers.license}-500000)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`

   } 
  


    return ` 
# ${answers.title} 

## Licensing

${badgeLicense}


## ${answers.description}
    
## Table Of Contents

1. [Instalation](#instalation)
2. [Usage](#usage)
3. [Contributing](#contributing)
4. [Tests](#tests)
5. [Questions](#questions)
6. [License](#license)
    
## Instalation
    
${answers.instalation}
    
## Usage
    
${answers.usage}
    
## Contribute
    
${answers.contribute}
    
## Tests
    
${answers.tests}
    
    
## Questions 
    
My GitHub username is ${answers.github}, you can view my profile [here](https://github.com/${answers.github}/).
If you have any questions and would like to get in touch my email adress is ${answers.email}
    
    
  
        
`

  }



  module.exports = generateMarkdown;
