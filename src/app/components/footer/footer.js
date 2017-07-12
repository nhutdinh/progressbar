(function() {
    'use strict';

    angular
        .module('singteltest')
        .directive('comFooter', comFooter);

    comFooter.$inject = ['$timeout'];

    function comFooter($timeout) {
        return {
            restrict: 'ACE',
            templateUrl: 'app/components/footer/footer.html',
            controller: 'footerCtrl',
            controllerAs: 'vm',
            link: function($scope){
                var listener = function(event, toState) {

                    $timeout(function() {
                        $scope.isVisible = !(toState.data && toState.data.hideFooter);
                    });
                };

                $scope.$on('$stateChangeSuccess', listener);
            }

        };
    }
})();                                                                                                                                