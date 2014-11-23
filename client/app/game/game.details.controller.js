'use strict';

angular.module('fullStackApp')
  .controller('GameDetailsCtrl', function ($scope, $http, socket, Store) {
    $scope.awesomeThings = [];

    $http.get('/api/games').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

   	$scope.searchThing = function() {
    	if($scope.newThing === '') {
    		return;
    	}
    	var options = '?bucket=games&game_content_type=games&sort=name&direction=asc&size=9999&start=0';
    	var send = {
    		region: 'ES',
    		language: 'es',
    		version: '999',
    		term: $scope.newThing,
    		options: options
    	};
    	Store.search(send, function (data) {
    		$scope.search_results = data.links;
    		$scope.newThing = '';
    	});
    };

    $scope.displaySize = function(size) {
    	$scope.size = 1;
    	$scope.unit = 'GB';
    };
  });
