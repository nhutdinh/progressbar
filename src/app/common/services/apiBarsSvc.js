(function(){
'use strict';
  angular
    .module('singteltest')
    .factory('apibarsSvc', apibarsSvc);

    apibarsSvc.$inject = ['$resource', 'singteltestUrl'];

    function apibarsSvc ($resource, singteltestUrl){
        
    	return $resource(singteltestUrl.url + '/bars' ,{}, {
            
            
        });
    }
})();
