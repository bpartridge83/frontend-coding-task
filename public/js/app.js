/*global window: false */

(function() {
  
  'use strict';

  /**
   * Accepts a route and shows/hides the appropriate links/content
   * @param {string} route
   */
  var setActive = function setActive(route) {
    // Pageload onpopstate event doesn't have a route/state
    if (!route) {
      return false;
    }

    var sections = document.getElementsByTagName('section'),
      links = document.getElementsByTagName('a');

    // Hide all links/sections except active
    for (var i = 0, len = links.length; i < len; i++) {
      
      // The reason these aren't combined logic statements is that
      // content and links elements might be ordered differently.
      // If we can ensure they are both ordered the same,
      // we can set the link class and hide/show the content simultaneously

      if (links[i].getAttribute('href') === route) {
        links[i].setAttribute('class', 'active');
      } else {
        links[i].setAttribute('class', '');
      }

      if (sections[i].getAttribute('id') === route.substr(1)) {
        sections[i].style.display = 'block';
      } else {
        sections[i].style.display = 'none';
      }

    }
  };

  /**
   * Accepts a click event, triggers the active content and pushState
   * @return false
   */
  var handleClick = function handleClick() {
    var route = this.getAttribute('href'),
      title = this.getAttribute('title');

    setActive(route);
    window.history.pushState(route, title, route);

    return false;
  };

  /**
   * onpopstate
   * @param {obj} data The PopStateEvent object
   */
  window.onpopstate = function(data) {
    setActive(data.state);
  };

  /**
   * Handles onload, fetches current state and attaches click event handler
   */
  window.onload = function () {
    var links = document.getElementsByTagName('a'),
      route = window.location.hash || window.location.pathname;

    // If no specific route is available yet, enable first link/content
    if (route.length < 2 || route.indexOf('hash') > -1) {
      route = document.getElementsByTagName('a')[0].getAttribute('href');
      window.history.replaceState(route, null, route);
    }

    setActive(route);

    // Attach onclick event handlers for all available links
    for (var i = 0, len = links.length; i < len; i++) {
      links[i].onclick = handleClick;
    }
  };

}());
