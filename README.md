# Eat da Burger

Eat-da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat in the "Add a Burger" section near the bottom.

After a user submits a burger's name, the burger will be displayed on the left side of the page -- waiting to be devoured.

Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.

Every burger is stored in a database, whether devoured or not. Click the heart button next to burgers in the available or devoured sections to save the burger to the favorites column. A modal dialog will prompt the user to enter their name to save a favorite. Favorites are then shown in the far right column with a count of # of saves along with a list of names that saved the burger.

## Technology Used
MySQL, Node, Express, Handlebars and Sequelize. 

## Code Design
MVC design pattern

## Dependencies
express
express-handlebars
body-parser
mysql
dotenv
sequelize

## Installation
- copy code from github repository
- run the schema.sql and seed.sql query in mysql to create table and enter seed data
- run npm install  to install dependent packages
- enter your MySQL password in the 'development' settings of ./config/config.json file

## Run Locally
navigate to the installation folder. from command line type node server.js to start the server and navigate to localhost:8080

## Heroku Deployment
https://eat-sequel-burger.herokuapp.com/
