# hello-amd
A simple example of writing Hello World utilizing AMD (i.e. Asynchronous Module Definition) and [RequireJS](http://requirejs.org/)

## What is this?
This example shows how to utilize AMD and requireJS to modularize your JavaScript code base. RequireJS is a module loader that simplifies JavaScript dependency management. This example also shows how to utilize the r.js build tool from RequireJS to output the application JavaScript into 1 minified and concatenated file.

## Do this first
Before looking at AMD and RequireJS take a look at how to achieve this in [Plain HTML and JavaScript](https://github.com/DevelopIntelligenceBoulder/hello-plain-old-javascript).

## Utilizing RequireJS
The application resides within the src folder. This includes the requirejs and jquery libraries utilized in this example under src/js/lib. RequireJS will load the needed modules asynchronously when needed.

### Within the index.html
The index.html only contains one JavaScript `<script>` element. This element allows the browser to know where the RequireJS module loader resides (i.e. js/lib/require.js). The `<script>` element also notifies RequireJS where the application configuration resides (i.e. `data-main="js/app"`). The application configuration is just another JavaScript file (i.e. js/app.js).

### Within js/app/application-controller.js
A RequireJS AMD module is defined. It takes jQuery and hello-view.js as dependencies. jQuery is brought in as a dependency only to wait for the DOM to be ready before complete JavaScript execution.

This module returns nothing because there is no public API to interact with. It is a self-contained module. That makes a call to render a separate view module.
 
### Within js/app/hello-view.js
A RequireJS AMD module is defined. It takes jQuery as a dependency to simplify DOM interaction. 
 
 The view exposes a `render` function in its public API allowing other modules to notify when it should render.
 
### Within js/app.js
The app.js is not an AMD module. Rather it contains the configuration for RequireJS to understand the application architecture. It also contains a call to require an AMD module. This require call bootstraps the tree of dependent modules.

## Utilizing the r.js Build Tool
While asynchronously loading simplifies development and allows for separation of modules, the Ajax calls can slow down the application. The r.js build tool minifies and concatenates all of the application JavaScript files into 1 JavaScript. 

### Within tools/build.json
The configuration for the r.js build tool. This is syntactically written as an object literal. The build.json file reuses the RequireJS configuration found within js/app.js. It also contains the location of the application source and the location the built application should be placed into. 

The build.json allows the application to be built out into modules. This is a simple application so it will only have 1 application module `app` in which all of the minified and concatenated JavaScript will be placed. This is the only file RequireJS will utilize when the application loads (i.e. no more Ajax calls needed).

### Within tools/r.js
The build tool run via command line `node r.js -o build.js`. Make sure to run this command from within the `tools` folder.

## Instructions to run plain RequireJS application
1. Install [NodeJS](https://nodejs.org/)
2. Run `npm start` to get the application running on the web server
    * Packages needed for this application will be installed (i.e. jQuery & Express)
    * The Node/Express Web Server will start
3. Go to `http://localhost:8080/src/` in your web browser

## Instructions to run r.js built RequireJS application
1. Install [NodeJS](https://nodejs.org/)
2. Run `npm start` to get the application running on the web server
    * Packages needed for this application will be installed (i.e. jQuery & Express)
    * The Node/Express Web Server will start
3. Go to `http://localhost:8080/build/` in your web browser
4. Try out this code in this [Plunker](http://plnkr.co/edit/6SXpXY?p=preview)

##Where to go from here?
[DevelopIntelligence](http://www.developintelligence.com/) offers a variety of [classes on JavaScript](http://www.developintelligence.com/catalog/web-development-training/core-javascript). Check out the [Introduction to JavaScript](http://www.developintelligence.com/catalog/web-development-training/core-javascript/introduction-to-javascript), the [Effective JavaScript](http://www.developintelligence.com/catalog/web-development-training/core-javascript/effective-javascript) or the [Advanced JavaScript](http://www.developintelligence.com/catalog/web-development-training/core-javascript/advanced-javascript) to get your team up to speed.
