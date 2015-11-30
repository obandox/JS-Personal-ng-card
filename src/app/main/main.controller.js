(function() {
  'use strict';

  angular
    .module('ngCard')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $location) {
    var vm = this;

    //Gravatar url https://gravatar.com/{md5(email)}.json
    //E.G
    //https://gravatar.com/a69f5bb8094e972175b771f407744259.json

    vm.showNgCard = showNgCard;

    function showNgCard(){
      if(vm.email){
         $location.path('/card/'+vm.email);
      }
    }



  }
})();
