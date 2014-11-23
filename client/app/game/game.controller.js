'use strict';

angular.module('fullStackApp')
  .controller('GameCtrl', function ($scope, $http, socket) {
    $scope.awesomeThings = [];

    $http.get('/api/games').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

   	$scope.addThing = function() {
    	if($scope.newThing === '') {
    		return;
    	}
    	var options = '?bucket=games&game_content_type=games&sort=name&direction=asc&size=999&start=0';
    	$http.post('/api/stores/search/', {region: 'ES', language: 'es',
    		version: '999', term: $scope.newThing, options: options})
    			.success(function(data, status, headers, config) {
    				$scope.search_results = data.links;
    			});
    	$scope.newThing = '';
    };
  });
