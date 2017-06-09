'use strict';

require('./_projects.scss');

module.exports = {
  template: require('./projects.html'),
  controller: ['$log', ProjectsController],
  controllerAs: 'projectsCtrl'
};

function ProjectsController($log) {
  $log.debug('ProjectsController');
}
