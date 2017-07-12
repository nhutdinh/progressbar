(function() {
    'use strict';

    angular
        .module('singteltest')
        .directive('comHeader', comHeader);
    comHeader.$inject = ['$timeout'];
    function comHeader($timeout) {
        return {
            restrict: 'ACE',
            replace: false,
            templateUrl: 'app/components/header/header.html',
            controller: 'headerCtrl',
            controllerAs: "vm",
            scope: {},
            transclude: true,
            link: function($scope){
                var listener = function(event, toState) {

                    $timeout(function() {
                        $scope.isVisible = !(toState.data && toState.data.hideHeader);
                        $scope.cssClass = toState.data && toState.data.headerClass;
                    });
                };

                $scope.$on('$stateChangeSuccess', listener);
            }
        };
    }
})();                                                                  