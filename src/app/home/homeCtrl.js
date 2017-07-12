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
