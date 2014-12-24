'use strict';

angular.module('fullStackApp')

  .factory('stateSaver', function ($location) {
      var redirectToUrlAfterLogin = '/';
      return {
        saveAttempUrl: function() {
          if($location.path().toLowerCase() != '/login') {
            redirectToUrlAfterLogin = $location.path();
          } else {
            redirectToUrlAfterLogin = '/';
          }
        },
        redirectoToAttempUrl: function() {
          $location.path(redirectToUrlAfterLogin);
        }
      } 
    })