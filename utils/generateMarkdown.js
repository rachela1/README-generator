// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {}
  
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Title
    ${data.title}

  ## Table of Contents
    ${data.tableOfContents}  

  ## Description
    ${data.description}

  ## Installation
   ${data.install}

  ## Usage
   ${data.use}

  ## Licenses
   ${data.licenses}
   
  ## Contributing
    ${data.contributions}  

 ## Tests
  ${data.tests}
  
 ## Questions 
  ${data.questions}  
`;
}

module.exports = generateMarkdown;
