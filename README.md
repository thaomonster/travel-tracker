---
# Travel Tracker
###### See all the places you have been, going, upcoming, pending add a new trip!
---
## Table of Contents
* [Introduction](#introduction)
* [Features](#features)
* [Technologies](#technologies)
* [Deployment/Setup](#deployment)
* [Authors](#authors)
* [Contributors](#contributors)


## Introduction
The primary goal of [Travel Tracker](https://github.com/thaomonster/travel-tracker.git) is to have the user be able to track all their trips as well be able to see how much they spend depending on year and able to add a new trip. ([Project Specs](https://frontend.turing.io/projects/travel-tracker.html)).

#### Motivation
The motivation behind this projects creation was to build an application to help the user track all trips they have been on and add a new trip while we focused on writing DRY JS, SASS/webpack, accessing data with apis and solidifying good habits in git workflow.

---
## Features
* [Login Page](#login-page)
* [Dashboard](#dashboard)
* [Calculate Annual Trip Cost](#calculate-annual-trip-cost)
* [Add New Trip](#add-new-trip)
* [Logout](#logout)
* [Continuous Improvement/Future Improvements](#Continuous-Improvement/Future-Improvements)

#### Login Page
Upon page load, a login will appear where a Traveler will need to input their username and password. An error will appear if the user enters a wrong username or password.

<p align = "center">
<img src="https://media.giphy.com/media/VIkDWxDTrTsvOkSgyW/giphy.gif">
</p>

#### Dashboard
Once the user clicks on the login button, the dashboard page will appear. In this section a user is able to see their past, present, upcoming, and pending trips in a widget where you can scroll through.

<p align = "center">
<img src="https://media.giphy.com/media/esc0pD89RJchK6wpKm/giphy.gif">
</p>

#### Calculate Annual Trip Cost
A user is able to click on the select year drop down menu and select a year to show how much they have spent on trips within that year.

<p align = "center">
<img src="https://media.giphy.com/media/4rkvbjAkBBGc3JHlrY/giphy.gif">
</p>


#### Add New Trip
A user is able to add new trips by clicking on the add new trip button and a modal will appear with a form that has four inputs for user to add their information in. Once they add in their information and click on the submit button then that new trip will always appear in the pending section waiting for approval from the travel agent.

<p align = "center">
<img src="https://media.giphy.com/media/E4d3pSTWFcSINJ8rfU/giphy.gif">
</p>

#### Logout
Once a user finishes will all that they want to do on the webpage a user can click the logout button so that no one else can access their information.

---
## Technologies
 - ES6 JavaScript
 - Testing with Mocha and Chai
 - Linting with ESLint
 - Semantic HTML
 - SCSS 
 - Lighthouse and ARIA Accessibility
 - Using network requests with API endpoints and async JavaScript
 - Using Webpack to compile mulitple class and script files
 - Deploying a site on GitHub Pages
 - Git workflow using GitHub Issues and Project Kanban Board

## Deployment/Setup

### Deployment
Visit the site at [GitHub Pages]()

### Setup
In order to deploy this site locally, a user will have to run a local server.

  1. Clone (or fork and then clone) this repo with  `git@github.com:thaomonster/travel-tracker.git [what you want to name the repo]`
  2. Change into the directory and run `npm install` to install project dependencies.
  3. Run `npm start` to start a local server 
  4. To access the site in your browser, navigate to the localhost address that your terminal gives you. 
  5. For any of the class tests, run ```npm test [name of the test you want to run]``` 
  6. Enter `control + c` in your terminal to stop the server at any time.

### Continuous Improvement/Future Improvements
  * Fetching data for multiple travlers.
  * Add Agent Interaction to the website including:
    - deleting a trip
  * Get Media Query to work correctly.
  * Have users be able to modify their pending trips before it is approved.
  * Drag and drop widgets depending on a user's preference.

## How to Contribute
If you are interested in contributing please:
- clone down this repo: `git@github.com:thaomonster/travel-tracker.git`
- create a new branch: `git checkout -b your-initials/feature/feature-name`
- contribute as you like
- in the terminal, push the branch upstream
- create a pull request via github
- wait for our reply

## Authors
<table>
    <tr>
        <td> Thao Ma <a href="https://github.com/thaomonster">GH</td>
 </tr>

<td><img src="https://avatars3.githubusercontent.com/u/67611512?s=400&u=ef3bac38d4f7d6d8a899d26ce1f0eb169f11bb9b&v=4" alt="Ms. Turtle"
 width="150" height="auto" /></td>
</table>

## Contributors

Thank you <a href="https://github.com/Elle624">Elle Li</a> and Background Photo by Chris Lawton on Unsplash.
  
      
