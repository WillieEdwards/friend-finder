# FRIEND FINDER

# Introduction (*The Gang Builds a Dating App*)

It looks like the gang is at it again! This time they have built South Philly's most exclusive app **(Paddy's Friend Finder)** to help find you a new best friend. It seems innocent enough, but what is their real motive? There's only one way to find out...

![Home Page Screenshot](/screenshot-home.png)

## Live Link

https://paddys-friend-finder.herokuapp.com/

# Overview

**Friend Finder** implements friend matching based on the user's responses to a ten question survey. The user responds to questions with values from 1 (Strongly Disagree) to 5 (Strongly Agree). When the survey is submitted, an existing user record closest to the current user's responses is found and returned. The closest set of user responses is defined as the set with the lowest absolute difference for all ten questions combined.

# Requirements

1. Modularity in the form of separate files for server logic, storing of friends, views, and routing.

1. 10-question survey to assess coolness of user.

1. Use express, body-parser, and path npm packages in the server.js file.

1. Separate JavaScript files for routing (htmlRoutes.js and apiRoutes.js).

1. Appropriate GET and POST routes for serving HTML pages and API calls.

1. Separate file for storing friends API (friends.js).

1. Calculate best match for user once survey is completed and return that match to the user.

# Applied Technologies

**Heroku** - site hosting

**GitHub** - file repository

**Visual Studio Code** - text editor

**Node.js** - terminal

**NPM Packages:**

* Express (https://www.npmjs.com/package/express)
* Body Parser (https://www.npmjs.com/package/body-parser)
* Path (https://www.npmjs.com/package/path)