# TaskApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



Requirements
Create a new Angular application from scratch using the Angular CLI tool.
Hint! This can be found in Lesson 3.

Name your project folder AngularFinalProject
This project will allow users to create and manage tasks using the four basic CRUD operations, Create, Read, Update, Delete:
A user should be to create tasks.
A user should be able to view a list of tasks by their name.
Hint! It is recommended you have one, hard-coded task so you can easily see that your list is working correctly.

A user should be able to click on an individual task.
When a task is selected, a detailed view about the task should be displayed.
This should be displayed with the URL of /:taskId.
The details should include the following:
Time to complete
Description
Necessary items needed to complete the task.
A user should be able to update a specific task on the detailed view page (/:taskId).
A user should be able to delete a specific task on the list of tasks page and on the detailed view page.
You will need to create a JSON file at the root of your project to store the tasks
Use the same JSON server to serve up this file.
This will allow you to use HTTP verbs to perform the CRUD operations.
