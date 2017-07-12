/**
 * Controller for home module
 */
(function(){

  angular
    .module('singteltest')
    .controller('notFoundCtrl', notFoundCtrl);

    notFoundCtrl.$inject = ['$state'];

    function notFoundCtrl($state){
    	var self = this;

    	self.takeBack = function(){
    		$state.go('home');
    	}
    }
})();