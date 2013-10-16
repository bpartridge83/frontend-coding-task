# Frontend Coding Task

A small one-page JavaScript application handling the frontend routing of a 3-tab navigation.

### Summary

This small app uses pushState or URL hashes to navigate through 3 tabs to show their associated content. The history is maintained for each tab click, and using the browser's Back/Forward buttons are also supported.

On initial page load, the JavaScript for the current state of the app, based on any available location information. If none is available, the app defaults to selecting the first available tab.

-----------

### View a Live Demo

#### pushState Routing:

http://frontend-coding-task.herokuapp.com

http://frontend-coding-task.herokuapp.com/sir-mix-a-lot

#### Hash-based routing:

http://frontend-coding-task.herokuapp.com/hash

http://frontend-coding-task.herokuapp.com/hash#sir-mix-a-lot

-----------

### Considerations

Although this is a frontend task, I needed to implement a small server to handle direct loading of routes (eg. /mark-twain). While pushState handles the routing on the frontend, when the user navigates directly to a route with their browser (eg. http://frontend-coding-task.herokuapp.com/shakespeare), there needs to be a method to handle the browser's request for the route.  With a simple Express Node.js app, all requests uniformly render the index.html page by default, so that the actual routing of the requested section is handled by Javascript.

The version using hashes (eg. #mark-twain) doesn't need any server, because the browser knows to load the HTML page directly, and JavaScript can handle all of the parsing and routing. I've included both of the versions in the same app, so the hash-based navigation is pass-through rendered from the `/hash` route.

### Passes W3C HTML5 Validation

http://validator.w3.org/check?uri=http://frontend-coding-task.herokuapp.com

### Installation

    git clone https://github.com/bpartridge83/frontend-coding-task.git
    cd frontend-coding-task
    npm install
    npm start