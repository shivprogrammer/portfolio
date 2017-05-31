'use strict';

module.exports = ['$stateProvider', '$urlRouterProvider', routerConfig];

function routerConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('', '/main');
  $urlRouterProvider.when('/', '/main');

  let states = [
    {
      name: 'main',
      url: '/main',
      template: require('../view/main/main.html'),
      controller: 'MainController',
      controllerAs: 'mainCtrl'
    }
  ];

  states.forEach( state => {
    $stateProvider.state(state);
  });
}
