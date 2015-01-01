'use strict';

angular.module('fullStackApp')
  .controller('GameCtrl', function ($scope, $http, $stateParams, $location, socket, Store) {

    if($stateParams.region && $stateParams.language && $stateParams.version
        && $stateParams.term && $stateParams.bucket && $stateParams.game_content_type
        && $stateParams.sort && $stateParams.direction && $stateParams.size
        && $stateParams.start) {
            $scope.newThing = $stateParams.term;
            searchGame({
            "region": $stateParams.region,
            "language": $stateParams.language,
            "version": $stateParams.version,
            "term": $stateParams.term, 
            "bucket": [$stateParams.bucket],
            "game_content_type": [$stateParams.game_content_type],
            "sort": $stateParams.sort,
            "direction": $stateParams.direction,
            "size": $stateParams.size,
            "start": $stateParams.start
        });
    }

   	$scope.searchThing = function() {
    	if($scope.newThing === '') {
            return;
    	}
    	$location.search({
            "region": "GB",
            "language": "en",
            "version": "999",
            "term": $scope.newThing, 
            "bucket": ["games"],
            "game_content_type": ["games"],
            "sort": "name",
            "direction": "asc",
            "size": "9999",
            "start": "0"
        });
    };

    function searchGame(json) {
        Store.search(json, function (data) {
            if(data.links.length > 0) {
                angular.forEach(data.links, function (link) {
                    if(link.default_sku && link.default_sku.entitlements &&
                            link.default_sku.entitlements[0] && link.default_sku.entitlements[0].drms &&
                                link.default_sku.entitlements[0].drms[0]) {
                                    displaySize(link.default_sku.entitlements[0].drms[0], function (err) {
                                        $scope.searchError = '';
                                        $scope.search_results = data.links;
                                    });
                    }
                });
            } else { 
                $scope.search_results = [];
                $scope.searchError = 'No data was found.';
            }
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
