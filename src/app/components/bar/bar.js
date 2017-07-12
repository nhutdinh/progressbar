(function () {
  'use strict';

  angular
    .module('singteltest')
    .directive('bar', bar);

  function bar() {

    var directive = {
      scope: {
          data: '='
      },
      restrict: 'E',
      templateUrl: 'app/components/bar/bar.html',
      controller: 'barCtrl',
      controllerAs: 'vm',
      replace: true
    };
    return directive;
  }

})();
