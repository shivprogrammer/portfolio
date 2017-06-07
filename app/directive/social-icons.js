'use strict';

require('./social-icons.scss');

module.exports = function() {
  return {
    restrict: 'EAC',
    template: require('./social-icons.html'),
    controller: ['$log', SocialIconsController],
    bindToController: true,
    controllerAs: 'socialIconsCtrl',
    scope: {
      socialIconsTitle: '@'
    }
  };
};

function SocialIconsController() {
  this.icons = ['github', 'linkedin'];
}
