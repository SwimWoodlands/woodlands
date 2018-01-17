# Woodlands Swimtopia Management

## Overview
Woodlands Swim Team (https://www.swimwoodlands.org) is managed by Swimtopia content management software which is customizable via javascript, css, and raw html.  This project aims to provide source control for the development and versioning of website customizations.  Custom css, javascript, and html is developed with comments and appropriate spacing under the src directory and organized into "components".  Components are just a logical way to divided and focus on a particular feature set during development and have a build process manage generation of appropriate concatenated, minified resources to be deployed to the swimtopia website.  Additional assests uploaded to the site are also maintained in the repository.

## Project Usage
This project uses a build automation tool named Gulp to manage assembly of components into files ready to be deployed in the swimtopia website.  In order to use this NodeJS (https://nodejs.org) should be installed, this project should be cloned locally (checked out), then from the project's root directory simply run `npm install` from the command line to install the project.  After install you can run `gulp` at any time from project root directory to generate a dist (distribution) directory that contains files and a readme explaining where to deploy the files on the swimtopia website.

## Project Structure 
TODO

