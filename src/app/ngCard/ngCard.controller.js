(function() {
  'use strict';

  angular
    .module('ngCard')
    .controller('NgCardController', NgCardController);

  /** @ngInject */
  function NgCardController($timeout, $location, $stateParams) {
    var vm = this;

    var email = $stateParams.email;

    //Gravatar url https://gravatar.com/{md5(email)}.json
    //E.G
    //https://gravatar.com/a69f5bb8094e972175b771f407744259.json


  }
})();
