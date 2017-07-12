(function() {
    'use strict';

    angular
    .module('singteltest')
    .config(routerConfig);

    routerConfig.$inject = ['$stateProvider'];

    function routerConfig($stateProvider) {
        'ngInject';
        $stateProvider
        .state('500', {
            url: '/500',
            templateUrl: 'app/error/500/500.html',
            controller: 'serverErrorCtrl',
            controllerAs: 'vm',
            data: {
                permissions: {
                    only: ['EVERY_ONE']
                },
                pageTitle: "500 - Server error",
                hideFooter: true
            }
        });
    }

})();
