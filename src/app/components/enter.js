(function() {
    'use strict';

    angular
        .module('singteltest')
        .directive('enter', enter);
    enter.$inject = [];
    function enter() {
        return {
            link : function(scope, elem, attrs) {
                elem.bind("keydown keypress", function (event) {
                    if(event.which === 13) {
                        scope.$apply(function (){
                            scope.$eval(attrs.enter);
                        });
                        event.preventDefault();
                    }
                });
            }
        };
    }
})();                                                                  