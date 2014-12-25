'use strict';

angular.module('fullStackApp')

  .factory('stateSaver', function ($location) {
      var redirectToUrlAfterLogin = '/';
      return {
        saveAttempUrl: function() {
          if($location.path().toLowerCase() != '/login') {
            redirectToUrlAfterLogin = $location.url();
          } else {
            redirectToUrlAfterLogin = '/';
          }
        },
        redirectoToAttempUrl: function() {
          $location.url(redirectToUrlAfterLogin);
        }
      } 
    })