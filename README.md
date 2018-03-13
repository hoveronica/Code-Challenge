# Code-Challenge
Foodsby Code Challenge 1: Front End

## User Guide: How to interact with the application on a local machine
**Note: user should have Node.js and npm already installed**(install Node.js and npm: (https://nodejs.org/en/download/))
1. Download the repo(https://github.com/hoveronica/Code-Challenge/archive/master.zip) and unzip the folder onto desired destination in your local machine. 
2. Open the command prompt window.
3. Type `npm install finalhandler serve-static` to install package.
4. Go to the directory where you extracted the folder. Final destination should be "/Code-Challenge-master/delivery-app".
5. Type `node delivery-app.js`.
6. Open a browser, and go on http://localhost:8080
7. Application will run on browser in your local machine.

## Ideas behind the implementation
This application is written in HTML, CSS and AngularJS. I picked AngularJS because it simplifies the process in creating a single-page application, and also make code resuable with the directives in its library. AngularJS can also fetch JSON file using $http and get method. However, due to time constraint, I was not able to successfully implement the given JSON file. If I was given more time, I would create a ng module to interact with the JSON file. 
