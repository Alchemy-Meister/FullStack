'use strict';

angular.module('fullStackApp')
  .controller('GameCtrl', function ($scope, $http, socket) {
    $scope.awesomeThings = [];

    $http.get('/api/games').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });
  });
