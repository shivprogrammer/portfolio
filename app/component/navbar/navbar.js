'use strict';

require('./_navbar.scss');

module.exports = {
  template: require('./navbar.html'),
  controller: ['$log', '$location', '$rootScope', NavbarController],
  controllerAs: 'navBarCtrl'
};

function NavbarController($log, $location, $rootScope) {
  $log.debug('NavbarController');

  this.routes = [
    {
      name: 'Home',
      url: '/#!/home'
    }
  ];
}
