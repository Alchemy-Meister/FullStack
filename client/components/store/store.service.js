'use strict';

angular.module('fullStackApp')
  .factory('Store', function ($resource) {
  	return $resource('/api/stores/:id', {
  		id: '@id'
  	}, {
  		geo: {
  			method: 'GET',
  			params: {
  				id: 'geo'
  			}
  		},
  		search: {
  			method: 'POST',
  			params: {
  				id: 'search'
  			}
  		},
      cidSearch: {
        method: 'POST',
        params: {
          id: 'cidSearch'
        }
      }
  	});
  });