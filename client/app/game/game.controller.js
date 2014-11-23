'use strict';

angular.module('fullStackApp')
  .controller('GameCtrl', function ($scope, $http, socket, Store) {
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
    	var fileSizeUnit = {
    		KB: {
        		unit: "KB",
        		val: 1024
    		},
    		MB: {
        		unit: "MB",
        		val: 1048576
    		},
    		GB: {
        		unit: "GB",
        		val: 1073741824
    		}
    	};
    	if(fileSizeUnit.MB.val > size) {
    		$scope.unit = fileSizeUnit.KB.unit;
    		$scope.size = Math.floor(size / fileSizeUnit.KB.val + .5)
    	} else if(fileSizeUnit.GB.val > size) {
    		$scope.unit = fileSizeUnit.MB.unit;
    		$scope.size = Number(size / fileSizeUnit.MB.val).toFixed(1);
    	} else {
    		$scope.unit = fileSizeUnit.GB.unit;
    		var sizeInGigas = Number(size / fileSizeUnit.GB.val).toFixed(1);
    		if(String(sizeInGigas).length > 4) {
    			sizeInGigas = Math.floor(Number(sizeInGigas) + .5);
    		}
    		$scope.size = sizeInGigas;
    	}
    };
  });
