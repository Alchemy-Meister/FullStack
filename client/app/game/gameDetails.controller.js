'use strict';

angular.module('fullStackApp')
  .controller('GameDetailsCtrl', function ($scope, $stateParams, Auth, socket, Store) {

    console.log(Auth.getCurrentUser());
    $scope.user = Auth.getCurrentUser();

    var send = {
        region: 'ES',
        language: 'es',
        version: '999',
        cid: $stateParams.cid,
      };

    Store.cidSearch(send, function (data) {
      $scope.gamedetails = data;
    });
  });
