'use strict';

angular.module('fullStackApp')
  .factory('User', function ($resource) {
    return $resource('/api/users/:id/:controller', {
      id: '@_id'
    },
    {
      changePassword: {
        method: 'PUT',
        params: {
          controller:'password'
        }
      },
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      },
      getGames: {
        method: 'GET',
        params: {
          controller: 'games'
        },
        isArray: true
      }, 
      addGame: {
        method: 'POST',
        params: {
          controller: 'games'
        }
      }
	  });
  });
