# Amega Mobile APP

This project contains the solution to the Amega mobile app automation task. It demonstrates how to use Appium with Javascript and WebDriver.io

## Prerequisites :computer:

**_NOTE:_** Before setting up the project, make sure you have the following tools installed:

- [Node.js](https://nodejs.org/) (v12 or higher)
- [Appium](http://appium.io/) (v2.x)
- [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html) (JDK 8 or higher)
- [Android SDK](https://developer.android.com/studio) with ADB (Android Debug Bridge) and Emulator

Ensure you have an emulator or physical Android device connected.

## Getting Started

Follow these steps to set up the project and run tests:

### 1. Clone the repository:

```bash
git clone https://github.com/Horbarz/amegaMobileAppAutomation.git`
cd amegaMobileAppAutomation
```

2. Install the dependencies:
```bash
npm install
```

3. Verify ADB Device Connection
```bash
adb devices
```

4. Check for Installed Appium Drivers
```bash
appium driver list --installed
```
If the required drivers are not installed, install them using:
```bash
appium driver install uiautomator2
```

5. Set Up Environment Variables
```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$ANDROID_HOME/emulator:$ANDROID_HOME/tools:$ANDROID_HOME/tools/bin:$ANDROID_HOME/platform-tools:$PATH
```

**Connecting**

**Running the Tests**
To run the automated tests, follow these steps:

**Run Test Suite**
1. Update device capabilities in the wdio.conf.js file to reflect your actual device.

2. Enter the command to run any of the test suites:
```bash
npx wdio.conf.js --suite login
npx wdio.conf.js --suite logout
npx wdio.conf.js --suite trading
```

## Project Structure
- test/page: Contains page objects.
- test/specs: Contains the spec files
- package.json: Holds dependencies and scripts for the project.
-  wdio.conf.js: WebDriver configuration file for setting up appium driver and capabilities.