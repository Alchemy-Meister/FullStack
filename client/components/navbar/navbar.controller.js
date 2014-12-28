'use strict';

angular.module('fullStackApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth, stateSaver) {
    $scope.menu = [{
      'title': 'Search',
      'link': '/'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    $scope.saveState = function() {
      stateSaver.saveAttempUrl();
    }
  });