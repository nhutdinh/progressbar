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
