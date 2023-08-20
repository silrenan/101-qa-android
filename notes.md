## github create repository

$ cd tgrounds/
$ gitclone https://github.com/Vanguarda101/ebac-m17.git
$ sudo apt install jenkins openjdk-11-jdk (currently is required java 11)
$ sudo systemctl start jenkins, browser to http://localhost:8080 and configure jenkins

## replicate previous test scenario

$ npm init -y (edit package.json if needed)
$ npm install wdio
$ npx wdio config

    - A project named "ebac-m17" was detected at "Tgrounds/ebac-m17", correct? Yes
    - What type of testing would you like to do? E2E Testing - of Web or Mobile Applications
    - Where is your automation backend located? In the cloud using BrowserStack
    - Which environment you would like to automate? Mobile - native, hybrid and mobile web apps, on Android or iOS
    - Which mobile environment you'ld like to automate? Android - native, hybrid and mobile web apps, tested on emulators and real devices
      > using UiAutomator2 (https://www.npmjs.com/package/appium-uiautomator2-driver)
    - Environment variable for username BROWSERSTACK_USERNAME
    - Environment variable for access key BROWSERSTACK_ACCESS_KEY
    - Which framework do you want to use? Mocha (https://mochajs.org/)
    - Do you want to use a compiler? No!
    - Do you want WebdriverIO to autogenerate some test files? No
    - Which reporter do you want to use? spec
    - Do you want to add a plugin to your test setup? 
    - Do you want to add a service to your test setup? appium, browserstack
    - Do you want me to run `npm install` Yes
$
 
# 



