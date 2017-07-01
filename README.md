## Things to know

So lets write some notes Sherwin.
Angular Apps with an Express Backend.
Basically you have to create you Express app the same way you have done for the last few projects.
But you define the routes a little differently, you want them  to export to a .json type response
instead of rendering to the browser.

Why, because you want to render very little information in the backend... the only person is going to see it
is you the server admin. We aren't using EJS anymore...duh because we have angular.

After you did the routes the only other thing to note is that now you have to run two servers
1. Your Express App (node ./bin/www)
2. Your Angular App (ng serve)

When you create your angular app you should probably keep them in the same sub-folder.
Like Bobs App ----> Angular-App and Express-App

Then on the angular side you have everthing set up, make sure that the routes work too. 

# AuthApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
