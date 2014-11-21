/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Store = require('../api/store/store.model');
var Game = require('../api/game/game.model');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});

Store.find({}).remove(function() {
  Store.create({
    store_id: 1,
    region: 'US',
    language: 'en'
  }, {
    store_id: 2,
    region: 'GB',
    language: 'en'
  }, {
    store_id: 3,
    region: 'AR',
    language: 'es'
  }, {
    store_id: 4,
    region: 'AR',
    language: 'en'
  }, {
    store_id: 5,
    region: 'AU',
    language: 'en'
  }, {
    store_id: 6,
    region: 'BE',
    language: 'nl'
  }, {
    store_id: 7,
    region: 'BE',
    language: 'fr'
  }, {
    store_id: 8,
    region: 'BR',
    language: 'pt'
  }, {
    store_id: 9,
    region: 'BR',
    language: 'en'
  }, {
    store_id: 10,
    region: 'BG',
    language: 'en'
  }, {
    store_id: 11,
    region: 'CA',
    language: 'en'
  }, {
    store_id: 12,
    region: 'CA',
    language: 'fr'
  }, {
    store_id: 13,
    region: 'CL',
    language: 'es'
  }, {
    store_id: 14,
    region: 'CL',
    language: 'en'
  }, {
    store_id: 15,
    region: 'CO',
    language: 'en'
  }, {
    store_id: 16,
    region: 'CO',
    language: 'es'
  }, {
    store_id: 17,
    region: 'HR',
    language: 'en'
  }, {
    store_id: 18,
    region: 'CZ',
    language: 'en'
  }, {
    store_id: 19,
    region: 'DK',
    language: 'da'
  }, {
    store_id: 20,
    region: 'DK',
    language: 'en'
  }, {
    store_id: 21,
    region: 'DE',
    language: 'de'
  }, {
    store_id: 22,
    region: 'ES',
    language: 'es'
  }, {
    store_id: 23,
    region: 'FI',
    language: 'en'
  }, {
    store_id: 24,
    region: 'FR',
    language: 'fr'
  }, {
    store_id: 25,
    region: 'GR',
    language: 'en'
  }, {
    store_id: 26,
    region: 'HA',
    language: 'zh'
  }, {
    store_id: 27,
    region: 'HA',
    language: 'zh'
  }, {
    store_id: 28,
    region: 'HK',
    language: 'en'
  }, {
    store_id: 29,
    region: 'HU',
    language: 'en'
  }, {
    store_id: 30,
    region: 'IN',
    language: 'en'
  }, {
    store_id: 31,
    region: 'ID',
    language: 'en'
  }, {
    store_id: 32,
    region: 'IE',
    language: 'en'
  }, {
    store_id: 33,
    region: 'IL',
    language: 'en'
  }, {
    store_id: 34,
    region: 'IT',
    language: 'it'
  }, {
    store_id: 35,
    region: 'JP',
    language: 'ja'
  }, {
    store_id: 36,
    region: 'KR',
    language: 'ko'
  }, {
    store_id: 37,
    region: 'KW',
    language: 'en'
  }, {
    store_id: 38,
    region: 'LU',
    language: 'fr'
  }, {
    store_id: 39,
    region: 'LU',
    language: 'de'
  }, {
    store_id: 40,
    region: 'MY',
    language: 'en'
  }, {
    store_id: 41,
    region: 'MX',
    language: 'es'
  }, {
    store_id: 42,
    region: 'MX',
    language: 'en'
  }, {
    store_id: 43,
    region: 'NL',
    language: 'nl'
  }, {
    store_id: 44,
    region: 'NZ',
    language: 'en'
  }, {
    store_id: 45,
    region: 'NO',
    language: 'no'
  }, {
    store_id: 46,
    region: 'NO',
    language: 'en'
  }, {
    store_id: 47,
    region: 'AT',
    language: 'de'
  }, {
    store_id: 48,
    region: 'PE',
    language: 'en'
  }, {
    store_id: 49,
    region: 'PE',
    language: 'es'
  }, {
    store_id: 50,
    region: 'PL',
    language: 'en'
  }, {
    store_id: 51,
    region: 'PL',
    language: 'pl'
  }, {
    store_id: 52,
    region: 'PT',
    language: 'pt'
  }, {
    store_id: 53,
    region: 'QA',
    language: 'en'
  }, {
    store_id: 54,
    region: 'RU',
    language: 'ru'
  }, {
    store_id: 55,
    region: 'SA',
    language: 'en'
  }, {
    store_id: 56,
    region: 'CH',
    language: 'de'
  }, {
    store_id: 57,
    region: 'SG',
    language: 'en'
  }, {
    store_id: 58,
    region: 'SI',
    language: 'en'
  }, {
    store_id: 59,
    region: 'ZA',
    language: 'en'
  }, {
    store_id: 60,
    region: 'CH',
    language: 'fr'
  }, {
    store_id: 61,
    region: 'FI',
    language: 'fi'
  }, {
    store_id: 62,
    region: 'SE',
    language: 'sv'
  }, {
    store_id: 63,
    region: 'CH',
    language: 'it'
  }, {
    store_id: 64,
    region: 'SE',
    language: 'en'
  }, {
    store_id: 65,
    region: 'HA',
    language: 'zh'
  }, {
    store_id: 66,
    region: 'TW',
    language: 'en'
  }, {
    store_id: 67,
    region: 'TH',
    language: 'en'
  }, {
    store_id: 68,
    region: 'TR',
    language: 'en'
  }, {
    store_id: 69,
    region: 'TR',
    language: 'tr'
  }, {
    store_id: 70,
    region: 'UA',
    language: 'ru'
  }, {
    store_id: 71, 
    region: 'AE',
    language: 'en'
  }, function() {
    console.log('finished populating stores');
  });
});

Game.find({}).remove(function() {
  Game.create({
    game_id: 'PCSB-00042',
    stores: [22],
    cid: 'EP4293-PCSB00042_00-BBCSEXNGP0001000'
  }, {
    game_id: 'NPEJ-00269',
    stores: [22],
    cid: 'EP0082-NPEJ00269_00-B000000000000898'
  }, function() {
    console.log('finished populating games');
  });
});