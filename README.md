# Amaysim-Tech-Challenge---Juan-Miguel-Pascual
This project is for the QA Tech Challenge as part of the NCS Amaysim Hiring process for the QA Engineer Position. This shows automated end-to-end UI testing using Javascript and Cypress in Page Object Model pattern to buy a 7-day sim plan and validate that the error message is displayed whenever the card payment feature fails.
## Installation and testing
These instructions will guide you on project setup and running the test on your local machine.

### Pre-requisites
These are the tools/software that are needed before cloning the code repository to your local machine.
1. [Node JS](https://nodejs.org/en/download) - Download the latest LTS Version
2. [Git](https://git-scm.com/downloads) - Download the latest version based on your machine's OS -

### Installation
1. Install Cypress - For a more detailed guide on installing Cypress please refer to: - [Cypress installation guide](https://docs.cypress.io/guides/getting-started/installing-cypress)
2. Clone this code repository
 ```
### clone this repo to a local directory
git clone https://github.com/jigspascual/Amaysim-Tech-Challenge---Juan-Miguel-Pascual.git

### cd into the cloned repo
cd Amaysim-Tech-Challenge---Juan-Miguel-Pascual

### install the node_modules
npm install
```
## Running the test
The test is modified to be able to run on multiple environments there are two ways to run the test. There are two environments for this project that can be found under /cypress/plugins/configs
1. qa.json = For sampling only (do not use)
2. Prod.json = For running the actual test for the actual website

### Executing test
1. via CLI using the command
```
npx cypress run --env configFile=prod
```
or
```
npm run test:prod
````

2. via Cypress Test Runner UI
```
npx cypress open --env configFile=prod
```




