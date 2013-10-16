# Frontend Coding Task

**Version: pushState** To view the `window.location.hash` version (eg. #mark-twain), go to http://github.com/bpartridge83/frontend-coding-task-hash

### View a Live Demo

http://frontend-coding-task.herokuapp.com

**Trigger alternate content on pageload:** http://frontend-coding-task.herokuapp.com/sir-mix-a-lot

### Summary

This small app uses pushState to navigate through 3 tabs to show their associated content. Using pushState, the history is maintained for each tab click, and using the browser's Back/Forward buttons are also supported.

On initial page load, the JavaScript for the current state of the app, based on any available location information. If none is available, the app defaults to selecting the first available tab.

### Considerations

Although this is a frontend task, I needed to implement a small server to handle direct loading of routes (eg. /mark-twain). While pushState handles the routing on the frontend, when the user navigates directly to a route with their browser, there needs to be a method to handle the browser's request for the route.  With a simple Express Node.js app, all requests uniformly render the index.html page, so that the actual routing of the requested section is handled by Javascript.

The [version using URL hashes](http://github.com/bpartridge83/frontend-coding-task-hash) (eg. #mark-twain) doesn't need any server, because the browser knows to load the HTML page directly, and JavaScript can handle all of the parsing and routing.

### Passes W3C HTML5 Validation

http://validator.w3.org/check?uri=http://frontend-coding-task.herokuapp.com
