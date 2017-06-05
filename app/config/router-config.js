'use strict';

module.exports = ['$stateProvider', '$urlRouterProvider', routerConfig];

function routerConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('', '/home');
  $urlRouterProvider.when('/', '/home');

  let states = [
    {
      name: 'home',
      url: '/home',
      template: require('../index.html'),
      controller: 'HomeController',
      controllerAs: 'homeCtrl'
    }
  ];

  states.forEach( state => {
    $stateProvider.state(state);
  });
}
