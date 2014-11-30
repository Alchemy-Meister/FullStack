'use strict';

angular.module('fullStackApp')
  .factory('Store', function ($resource) {
  	return $resource('/api/stores/:action/:field/:cid', {
  		action: '@action',
      field: '@field',
      cid: '@cid'
  	}, {
  		geo: {
  			method: 'GET',
  			params: {
  				action: 'geo'
  			}
  		},
  		search: {
  			method: 'GET',
  			params: {
          action: 'search',
          field: 'name'
  			}
  		},
      cidSearch: {
        method: 'GET',
        params: {
          action: 'search',
          field: 'cid'
        }
      }
  	});
  });