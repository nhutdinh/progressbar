(function () {

    angular
        .module('singteltest')
        .factory('responseInterceptor', responseInterceptor);

    responseInterceptor.$inject = ['$location'];

    function responseInterceptor($location) {
        return {
            'response': function (response) {
                // do something on success
                return response;
            },

            // optional method
            'responseError': function (error) {
                if(error.status >= 400 && error.status < 500){
                    $location.path("/400");
                } else if ( error.status >= 500 && error.status <600){
                    $location.path("/500");
                }
                return error;
                
            }
        };
    }
}) ();