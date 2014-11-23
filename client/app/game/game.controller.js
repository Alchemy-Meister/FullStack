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
    		angular.forEach(data.links, function (link) {
    			if(link.hasOwnProperty('default_sku')) {
    				if(link.default_sku.hasOwnProperty('entitlements')) {
    					if(link.default_sku.entitlements[0]){
    						if(link.default_sku.entitlements[0].hasOwnProperty('drms')) {
    							if(link.default_sku.entitlements[0].drms[0]) {
    								displaySize(link.default_sku.entitlements[0].drms[0], function() {
    									$scope.search_results = data.links;
    									$scope.newThing = '';
    								});
    							}
    						}
    					}
    				}
    			}
    		});
    	});
    };

    function displaySize(json, cb) {
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
    	var unit;
    	if(fileSizeUnit.MB.val > json.size) {
    		json.unit = fileSizeUnit.KB.unit;
    		json.size = Math.floor(json.size / fileSizeUnit.KB.val + .5)
    	} else if(fileSizeUnit.GB.val > json.size) {
    		json.unit = fileSizeUnit.MB.unit;
    		json.size = Number(json.size / fileSizeUnit.MB.val).toFixed(1);
    	} else {
    		json.unit = fileSizeUnit.GB.unit;
    		json.size = Number(json.size / fileSizeUnit.GB.val).toFixed(1);
    		if(String(json.size).length > 4) {
    			json.size = Math.floor(Number(json.size) + .5);
    		}
    	}
    	cb();
    };
  });
