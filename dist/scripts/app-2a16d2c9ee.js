(function () {
  'use strict';
  
  angular
    .module('singteltest', [
      'ngResource',
      'ui.router'
    ]);

})();

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

(function() {
    'use strict';

    angular
        .module('singteltest')
        .factory('headerSvc', headerSvc);

    headerSvc.$inject = [];

    function headerSvc() {
        
        return {
            
        };
    }
})();
(function() {
    'use strict';

    angular
        .module('singteltest')
        .controller('headerCtrl', headerCtrl);

    headerCtrl.$inject = [];

    function headerCtrl() {
        var self = this;
		
    }
})();                                                                  
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
(function() {
    'use strict';

    angular
        .module('singteltest')
        .controller('footerCtrl', footerCtrl);

    footerCtrl.$inject = ['$location'];

    function footerCtrl(singteltestMessagePopupSvc) {
        var self = this;

        
    }
})();                                                                  
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
(function() {
    'use strict';

    angular
        .module('singteltest')
        .controller('barCtrl', barCtrl);

    barCtrl.$inject = ['$scope'];

    function barCtrl($scope) {

        
        
        
        
    }
})();
(function () {
  'use strict';

  angular
    .module('singteltest')
    .directive('bar', bar);

  function bar() {

    var directive = {
      scope: {
          data: '='
      },
      restrict: 'E',
      templateUrl: 'app/components/bar/bar.html',
      controller: 'barCtrl',
      controllerAs: 'vm',
      replace: true
    };
    return directive;
  }

})();

(function() {
    'use strict';

    angular
        .module('singteltest')
        .factory('stringUtils', stringUtils);

    stringUtils.$inject = [];

    function stringUtils() {
        
    //------------------------------------------------------------------------------------------------------------------
        return {
           
        };
    }
})();
(function(){
'use strict';
  angular
    .module('singteltest')
    .factory('apibarsSvc', apibarsSvc);

    apibarsSvc.$inject = ['$resource', 'singteltestUrl'];

    function apibarsSvc ($resource, singteltestUrl){
        
    	return $resource(singteltestUrl.url + '/bars' ,{}, {
            
            
        });
    }
})();

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
﻿/*
 * Service handler for Home module
 * We will implement all business logic for "home" module here
 */
/**
 * Controller for home module
 */
(function(){

  angular
    .module('singteltest')
    .factory('homeSvc', homeSvc);

    homeSvc.$inject = [];

    function homeSvc(fileUtils){
      function updateBarValue(bar, value, limit){
        var estimatedValue = bar.value + value;
        if(estimatedValue < 0) estimatedValue = 0;
        if(estimatedValue > limit) estimatedValue = limit;
        bar.value = estimatedValue;
        bar.percentage = Math.round(100*bar.value/limit);
      }
    	function generateBars(bars, limit){
        var arr = [];
        for (var i = 0 ; i < bars.length; i ++){
          arr.push({
            value: bars[i],
            percentage: Math.round(100*bars[i]/limit),
            limit: limit
          });
        }
        return arr;
      }
      function generateBtns(buttons){
        var arr = [];
        for (var i = 0 ; i < buttons.length; i ++){
          arr.push({
            value: buttons[i]
          })
        }
        return arr;
      }
     
		/*
		 * exports public methods
		 */
		return {
        updateBarValue: updateBarValue,
        generateBtns: generateBtns,
        generateBars: generateBars,
			
		};
    }
})();

/**
 * Controller for home module
 */
(function(){

  angular
    .module('singteltest')
    .controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ['barsData', 'homeSvc'];

    function homeCtrl(barsData, homeSvc){
    	var self = this;
      self.onBtnClicked = onBtnClicked;
      self.onBarClicked = onBarClicked;
      self.selectedBar = null;
      self.bars = [];
      self.btns = [];
      self.limit = barsData.limit;

      init();
      function init(){
        self.bars = homeSvc.generateBars(barsData.bars, self.limit);
        self.buttons = homeSvc.generateBtns(barsData.buttons);
        setSelectedBar(self.bars[0]);
      }
      
      function onBarClicked(bar){
        setSelectedBar(bar);
      }
      function onBtnClicked(btn){
        // if(self.selectedBar.value === 0 || self.selectedBar.value === self.limit) return;
        homeSvc.updateBarValue(self.selectedBar, btn.value, self.limit);
      }
      function setSelectedBar(bar){
        if(self.selectedBar){
          self.selectedBar.isSelected = false;
        }
        bar.isSelected = true;
        self.selectedBar = bar;
      }
      
    }
})();

(function() {
  'use strict';

  angular
    .module('singteltest')
    .config(routerConfig);

  routerConfig.$inject = ['$stateProvider'];

  function routerConfig($stateProvider) {
    'ngInject';
    $stateProvider
      .state('home', {
        url: '/?callback',
        templateUrl: 'app/home/home.html',
        controller: 'homeCtrl',
        controllerAs: 'vm',
        data: {
          pageTitle: "singteltest",
          headerClass: 'homepage'
        },
        resolve: {
          barsData: ["apibarsSvc", "$q", "$state", function(apibarsSvc, $q, $state){
            var def = $q.defer();
            apibarsSvc.get().$promise.then(function(response){
              def.resolve(response);
            }, function(){
              $state.go('500');
              def.reject();
            });
            return def.promise;
          }]
        }
      });
  }

})();

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
(function () {
  'use strict';

  angular
    .module('singteltest')
    .run(runBlock);

  runBlock.$inject = [];

  function runBlock() {
    


  }

})();

(function() {
  'use strict';

  angular
    .module('singteltest')
    .config(routerConfig);

  routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routerConfig($stateProvider, $urlRouterProvider) {
    'ngInject';
    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise(function($injector, $location){
          var state = $injector.get('$state');
          state.go('404');
    });
  }

})();

(function () {
  'use strict';
  angular
    .module('singteltest')
    .config(config)
    .provider('singteltestUrl', function () {

      var baseUrl = "http://pb-api.herokuapp.com/";

      this.$get = function () {
        return {
          url: baseUrl
        }
      }

    });

  config.$inject = ['$logProvider', '$httpProvider' ,'$locationProvider'];
   function config($logProvider, $httpProvider, toastrConfig, $locationProvider) {

   
    // Enable log
    $logProvider.debugEnabled(true);

    
    
  }

})();

angular.module("singteltest").run(["$templateCache", function($templateCache) {$templateCache.put("app/home/home.html","<div class=home><div class=jumbotron><h1>Singtel test</h1><p>Bar Controllers</p></div><h4 class=home__bar-guide-text>Click on bar to set control</h4><div ng-repeat=\"bar in vm.bars\" ng-click=vm.onBarClicked(bar)><bar data=bar></bar></div><button class=\"btn btn-primary home__bar-control-btn\" ng-disabled=\"(btn.value > 0 && vm.selectedBar.value === vm.limit) || (vm.selectedBar.value ===0 && btn.value < 0)\" ng-repeat=\"btn in vm.buttons\" ng-click=vm.onBtnClicked(btn) ng-bind=btn.value></button></div>");
$templateCache.put("app/components/bar/bar.html","<div class=bar><div class=progress ng-class=\"{\'progress-striped active\': data.isSelected}\"><div class=progress-bar ng-class=\"{\'active\': data.isSelected,\'progress-bar-success\': data.percentage < 90,\'progress-bar-warning\': data.percentage >= 90, \'progress-bar-danger\': data.percentage === 100}\" role=progressbar ng-style=\"{\'width\': data.percentage + \'%\'}\"></div><span class=bar__percentage ng-bind=\"data.percentage + \'% Complete\'\"></span></div><div class=bar__value ng-bind=\"data.value + \'/\' + data.limit \"></div></div>");
$templateCache.put("app/components/footer/footer.html","<div class=\"container text-center\"><hr><div class=row><div class=col-lg-12><div class=col-md-12><ul class=\"nav nav-pills nav-stacked\"><li><a href=#>About us</a></li><li><a href=#>Blog</a></li></ul></div></div></div><hr><div class=row><div class=col-lg-12><ul class=\"nav nav-pills nav-justified\"><li><a href=/ >© 2017 singteltest.</a></li><li><a href=#>Terms of Service</a></li><li><a href=#>Privacy</a></li></ul></div></div></div>");
$templateCache.put("app/components/header/header.html","<nav class=\"navbar navbar-default\"><div class=container-fluid><!-- Brand and toggle get grouped for better mobile display --><div class=navbar-header><button type=button class=\"navbar-toggle collapsed\" data-toggle=collapse data-target=#bs-example-navbar-collapse-1 aria-expanded=false><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a ui-sref=home class=navbar-brand href=#>Singtel Test</a></div></div></nav>");
$templateCache.put("app/error/404/404.html","<div><section class=\"row error-400 bg-404 no-margin\"><div class=ops>Oops!</div><div class=not-exist-notice>The page you are looking for does not exist.</div><button class=\"btn btn--take-back text--bold\" ng-click=vm.takeBack()>Take Me Back</button></section></div>");
$templateCache.put("app/error/500/500.html","<div><section class=\"row error-500 homepage-intropage bg-server-error no-margin\"><div class=ops>Oops!</div><div class=not-exist-notice>We are in the midst of fixing it and will have things back to normal again.</div><div class=try-later>Please try back later.</div></section></div>");}]);
//# sourceMappingURL=../maps/scripts/app-2a16d2c9ee.js.map
