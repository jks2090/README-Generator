// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents

  ## Installation
  ${data.instructions}
  # Usage
  ${data.usage}
  # License
  ${data.license}
`;
}

module.exports = generateMarkdown;
