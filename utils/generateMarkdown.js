// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseBadges = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    ISC: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    Mozilla: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    Apache: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    EPL: '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
    WTFPL: '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)',
  };

  return license !== 'none' ? licenseBadges[license] || '' : '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    MIT: '[MIT](https://opensource.org/licenses/MIT)',
    ISC: '[ISC](https://opensource.org/licenses/ISC)',
    Mozilla: '[MPL 2.0](https://opensource.org/licenses/MPL-2.0)',
    Apache: '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)',
    EPL: '[EPL 1.0](https://opensource.org/licenses/EPL-1.0)',
    WTFPL: '[WTFPL](http://www.wtfpl.net/about/)',
  };

  return license !== 'none' ? licenseLinks[license] || '' : '';
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license !== 'none'
    ? `## License
    
This app is licensed under the ${renderLicenseLink(license)} license.`
    : '';
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Title
    ${data.title}

  ## Table of Contents

  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [License](#License)
  - [Questions](#Questions)


  ## Description
  ${data.description}

  ## Installation
  ${data.install}

  ## Usage
  ${data.use}

  
  ${renderLicenseSection(data.license)}
   
  ## Contributing
  ${data.contributions}  

  ## Tests
  ${data.tests}
  
  ## Questions 
  GitHub: [${data.gitHubName}](https://github.com/${data.gitHubName}) 
  
  Contact me at ${data.email} for further questions.
`;
}

module.exports = generateMarkdown;
