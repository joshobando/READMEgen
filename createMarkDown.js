const createMarkDown = (data) => {
    return `
![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)

## Description

${data.description}

# Email

${data.email}

#Project

${data.project}

#License

${data.license}

#Install
\`\`\`
${data.install}
\`\`\`

#Run

${data.run}

#Using

${data.using}

#Contributing

${data.contributing}
`;
}

module.exports = createMarkDown;