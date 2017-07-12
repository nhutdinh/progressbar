(function() {
  'use strict';

  angular
    .module('singteltest')
    .config(routerConfig);

  routerConfig.$inject = ['$stateProvider'];

  function routerConfig($stateProvider) {
    'ngInject';
    $stateProvider
      .state('home', {
        url: '/?callback',
        templateUrl: 'app/home/home.html',
        controller: 'homeCtrl',
        controllerAs: 'vm',
        data: {
          pageTitle: "singteltest",
          headerClass: 'homepage'
        },
        resolve: {
          barsData: function(apibarsSvc, $q, $state){
            var def = $q.defer();
            apibarsSvc.get().$promise.then(function(response){
              def.resolve(response);
            }, function(){
              $state.go('500');
              def.reject();
            });
            return def.promise;
          }
        }
      });
  }

})();
