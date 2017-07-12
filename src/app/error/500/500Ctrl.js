/**
 * Controller for home module
 */
(function(){

  angular
    .module('singteltest')
    .controller('serverErrorCtrl', serverErrorCtrl);

    serverErrorCtrl.$inject = ['$state'];

    function serverErrorCtrl($state){
    	var self = this;
    }
})();