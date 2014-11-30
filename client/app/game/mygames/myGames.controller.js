'use strict';

angular.module('fullStackApp')
  .controller('MyGamesCtrl', function ($scope, $http, $stateParams, $location, $q, Auth, User, socket, Store) {

    var user = User.get(function() {
        if(user.games.length > 0) {
            User.getGames({id: user._id},function (games) {
                var promises = [];
                angular.forEach(games, function (game) {
                    var promise = Store.cidSearch({
                        "region": "ES",
                        "language": "es",
                        "version": "999",
                        "cid": game.cid
                    });
                    promises.push(promise.$promise);
                });
                $q.all(promises).then(function (games) {
                    console.log(games);
                    angular.forEach(games, function (game) {
                        if(game.default_sku && game.default_sku.entitlements &&
                            game.default_sku.entitlements[0] && game.default_sku.entitlements[0].drms &&
                                game.default_sku.entitlements[0].drms[0]) {
                                    displaySize(game.default_sku.entitlements[0].drms[0], function() {
                                        $scope.search_results = games;
                                    });
                        }
                    });
                });
            });
        } else {
            $scope.searchError = 'No games at the moment.'
        }
    });

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
