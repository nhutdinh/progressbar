(function () {
  'use strict';
  angular
    .module('singteltest')
    .config(config)
    .provider('singteltestUrl', function () {

      var baseUrl = "http://pb-api.herokuapp.com/";

      this.$get = function () {
        return {
          url: baseUrl
        }
      }

    });

  config.$inject = ['$logProvider', '$httpProvider' ,'$locationProvider'];
   function config($logProvider, $httpProvider, toastrConfig, $locationProvider) {

   
    // Enable log
    $logProvider.debugEnabled(true);

    
    
  }

})();
