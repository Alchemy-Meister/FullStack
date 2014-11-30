'use strict';

angular.module('fullStackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('game', {
        url: '/game?region&language&version&term&bucket&game_content_type&sort&direction&size&start',
        templateUrl: 'app/game/search/game.html',
        controller: 'GameCtrl'
      })
      .state('gameDetails', {
      	url: '/game/details/:cid?store',
      	templateUrl: 'app/game/details/game-details.html',
      	controller: 'GameDetailsCtrl'
      })
      .state('myGames', {
        url: '/mygames',
        templateUrl: 'app/game/mygames/my-games.html',
        controller: 'MyGamesCtrl'
      });
  });