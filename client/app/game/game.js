'use strict';

angular.module('fullStackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('game', {
        url: '/game',
        templateUrl: 'app/game/game.html',
        controller: 'GameCtrl'
      })
      .state('game.details', {
      	url: '/game/details',
      	templateUrl: 'app/game/game.details.html',
      	controller: 'GameDetailsCtrl'
      });
  });