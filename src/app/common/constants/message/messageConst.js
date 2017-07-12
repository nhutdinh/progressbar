(function() {
    'use strict';
    angular
        .module('singteltest')
        .constant('messageConst', {
           "error" : {
                "SOME_THING_WRONG": "Oops! Something went wrong. Please try again."
           }
        });
})();