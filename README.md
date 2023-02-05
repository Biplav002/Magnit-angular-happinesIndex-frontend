 This is a front end application which is devloped using angular and it it takes input from user using different format like drop down,radio buttons,star ratings and based all rating is sent to the backend (a spring boot app) which calculates the average of these rating and returns a rating which is then dispalyed on UI and the rating(out of 5) is dispalyed with border which corrosponds as follows (If red-> rating was below 2, If yellow-> rating was either 2 or 3 ,Green->If raing is above 3 )

For creating star raing added a new package 'ng-bootstrap' and have used ngb-rating directive to have rating with star.

have made the application secure by crating a private key and self signed certificate , so application should be started using 'npm start' command  as have configured
package.json according to use key and self signed certificate also application should be accessed us 'https' as follows :https://localhost:4200/

# HappinessIndexFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.6.

## Development server

Run with 'npm start' to run the front end in secure mode using https



