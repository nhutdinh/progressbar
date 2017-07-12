(function() {
    'use strict';
    angular
        .module('singteltest')
        .constant('commonConst', {
            ACTION: {
                CREATE: "CREATE",
                EDIT: "EDIT",
                DELETE: "DELETE"
            }
        });
})();