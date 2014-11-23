'use strict'

var request = require('request');
/** Returns a json the region of the store which the client should access by default
 * @param cb - The callback that handles the response.
 */
exports.getGeo = function(cb) {
	var options = {
		url: 'https://store.sonyentertainmentnetwork.com/kamaji/api/chihiro/00_09_000/geo',
        json: true
	};
	request.get(options, function(err, response, body_json) {
	    if(!err && response.statusCode === 200){
	      return cb(body_json);
	    } else {
	      console.log(err);
	    }
  });
};

/** Request a search result json to the Sony API asynchonously and executes the callback on completion.
 *
 * @param {string} region - Sets in which store should search the term. { US }
 * @param {string} language - Sets in which store should search the term. { en }
 * @param {string} version - Chihiro API version. { 999 }
 * @param {string} term - The word to be searched, spaces must be replaced by '+' character. { Final+Fantasy }
 * @param {string} bucket - The container within the store from where to start the search. { games }
 * @param {string} field - The to be ordered by. { name, id, release_date, price }
 * @param {string} direction - Sorts the result set { asc, desc }
 * @param {number} size - Defines the number of items to be searched and returned.
 * @param {number} start - Defines the position from where to return the search result.
 * game_content_type=games,bundles,addons,demos,themes,other_extras
 * @param cb - The callback that handles the response.
 */
exports.search = function(region, language, version, term, options, cb) {
	var data = {
		url: 'https://store.sonyentertainmentnetwork.com/store/api/chihiro/00_09_000/search/' + region +
			'/' + language + '/' + version + '/' + term + options,
		json: true
	};
	request.get(data, function(err, response, body_json) {
		if(!err && response.statusCode === 200) {
			return cb(body_json);
		} else {
			console.log(err);
		}
	});
};

exports.cidSearch = function(region, language, version, cid, cb) {
	var data = {
		url: 'https://store.sonyentertainmentnetwork.com/store/api/chihiro/00_09_000/container/' +
		region + '/' + language + '/' + version + '/' + cid,
		json: true
	};
	request.get(data, function(err, response, body_json) {
		if(!err && response.statusCode === 200) {
			return cb(body_json);
		} else {
			console.log(err);
		}
	});
};