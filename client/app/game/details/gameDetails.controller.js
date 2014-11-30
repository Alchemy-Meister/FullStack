'use strict';

angular.module('fullStackApp')
  .controller('GameDetailsCtrl', function ($scope, $stateParams, $location, Auth, User, socket, Store) {

    var currentstore = 'ES/es';
    var user;
    var cid;
    var game_id;
    var store;

    $scope.visible = false;

    function isLoggedIn() {
      return Auth.isLoggedIn();
    }

    if($stateParams.cid && $stateParams.store) {
      var geoData = $stateParams.store.split('/');
      cid = $stateParams.cid; 
      gameInfo({
        "region": geoData[0],
        "language": geoData[1],
        "version": "999",
        "cid": $stateParams.cid
      });
    }

    function isOwned(cb) {
        if(Auth.isLoggedIn()) {
          user = User.get(function() {
            for(var index in user.games) {
              if(user.games[index] === game_id) {
                return cb(true);
              }
            }
            return cb(false);
          });
        } else {
          return cb(false);
        }
    }

    $scope.addGame = function() {
      User.addGame({
        "user_id": user._id,
        "game": {
          "game_id": game_id,
          "store": store,
          "cid": cid }
      });
      $scope.owned = true;
    };

    function gameInfo(json) {
       Store.cidSearch(json, function (data) {
          game_id = cid.substring(cid.indexOf('-') + 1, cid.indexOf('_'));
          isOwned(function (result) {
            $scope.owned = result;
          });
          store = json.region.concat('/', json.language);
          $scope.gamedetails = data;
          $scope.visible = isLoggedIn();
    });
    }
   
  });
