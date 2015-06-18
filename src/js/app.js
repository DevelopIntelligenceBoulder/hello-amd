/**
 * Configuration allowing RequireJS to understand the application
 *   architecture.
 */
requirejs.config({
    //Location of the requirejs file
    "baseUrl": "js/lib",
    //Setting up any special paths within the architecture
    paths: {
        //Location of the application JavaScript
        "app": "../app"
    }
});

/**
 * Only call to requirejs kicks-off/loads the initial module.
 *   i.e. the Application Controller
 */
requirejs(["app/application-controller"]);