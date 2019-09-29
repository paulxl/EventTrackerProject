### EVENT TRACKER
Code Name: -Volunteer Tracker-
Skill Distillery -22 Homework Assignment For Week 12

##Overview:
The students assignment was to create a JPA Project to track events and then configure a Spring REST application following it.  This project is different from previous assignments as we were introduced to the Services, Repositories, and new controllers side of REST.  In addition the project was to be tested on the app Postman to determine if our api mapping succeeded.

This assignment was to be designed in order to expand upon it in the coming weeks.  No front end was needed, as we will be learning Javascript in the coming week and then later to improve upon the project with Angular afterwards.

I choose for my event tracker an app to track volunteers who would be available to foster dogs for a non-profit organization until they can find a home.
I created a database with one table that has the basic information about the foster.  Later more tables will be added that may include items an organization might need such as:  veterinarians, people willing to help with trasportation, other volunteer organizations, shelters, and donors.

##How To use:
This application has the ability to do some basic CRUD funtionality using localhost:8090/api and JSON inserts.  The following are currently available:
GET (list of all volunteers)      /volunteer
GET (volunteer by id)             /volunteer/{id}
GET (volunteer by unsername)      /volunteer/username/{username}
GET (active volunteers)           /volunteer/active/{boolean}  (is this case "true")
PUT (update a volunteers status)  /volunteer/{id}   (using their id)
PUT (update a volunteers status)  /volunteer/username/{username}   (using their username)
DELETE (delete by id)             /volunteer/{id}
POST (create new volunteer)       /volunteer

*The first four people have been hardcoded using MySQL Workbench and all functions work.
*The database has eight columns including an auto-generated id field.  They include the following: username(preferable a email address), password, firstname, lastname, active(boolean, to indicate availability), size(as in dog size they are willing to foster, later to be turned into enum), and finally; breeds(as in if they have a preference). Username, password, firstname, and lastname are not-null fields and must be filled-in. The rest are optional.  

##Technologies Used:
*Spring Tool Suite 4
*Java (JPA/Spring Boot/Gradel)
MySQL and MySQL Workbench
Postman Development Tool for APIs (Mac version)
Terminal
GITHUB
JSON
MAMP
Apache Tomcat server
Slack

##Lessons Learned
JPARepository and Service entities make life a whole easier.
The more complicated a system the more attention to the unusual details is needed.  Case in point: I kept getting a application failure at start-up that stumped me for hours.  Our TAs downloaded it from GitHub and discovered I had an illegal and unnecessary argument in the JPARepository.  This caused my Spring Boot application not to start.  Removing it and magic happened and all was good in java world.
I also had mapping issues in the controller, because prior to this assignment I did not fully understand them.  I now have a much better understanding.

##Challenges
Tracing out errors as always, trouble-shooting mapping issues, and of course typos.

##Further Goals
I plan on growing this project to include the above tables and make it web friendly and easy to use.  Something a non-profit animal rescue group could easily use and implement.
