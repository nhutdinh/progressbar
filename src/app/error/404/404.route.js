(function() {
    'use strict';

    angular
    .module('singteltest')
    .config(routerConfig);

    routerConfig.$inject = ['$stateProvider'];

    function routerConfig($stateProvider) {
        'ngInject';
        $stateProvider
        .state('404', {
            templateUrl: 'app/error/404/404.html',
            controller: 'notFoundCtrl',
            controllerAs: 'vm',
            data: {
                permissions: {
                    only: ['EVERY_ONE']
                },
                pageTitle: "404 - Not found",
                hideFooter: true
            }
        });
    }

})();
