(function() {
  'use strict';

  angular
    .module('singteltest')
    .config(routerConfig);

  routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routerConfig($stateProvider, $urlRouterProvider) {
    'ngInject';
    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise(function($injector, $location){
          var state = $injector.get('$state');
          state.go('404');
    });
  }

})();
