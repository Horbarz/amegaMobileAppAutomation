# Amega Mobile APP

This repository contains automated tests for the login and logout functionalities of the Amega Mobile App , developed using Appium and Javascript

:computer: **Prerequisites**

**_NOTE:_** Before running the tests, ensure you have the following installed:

- Node.js
- npm

**Installation**
1. Clone the repository:

`git clone https://github.com/horbarzBlusalt/blusaltCoreBanking.git`
`cd blusaltCBA`


2. Install the dependencies:

`npm install`

**Running the Tests**
To run the automated tests, follow these steps:

**Run Login Test Suite**
1. Enter the command to run the login test suite:

`npx wdio.conf.js --suite login`

2. In the Cypress Test Runner, click on the test you want to run. This will open a browser and execute the selected test, displaying the results in real-time.

**Run Tests in Headless Mode**
1. Execute all tests in headless mode:
`npx cypress run`