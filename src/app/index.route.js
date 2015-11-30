(function() {
  'use strict';

  angular
    .module('ngCard')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        controller: 'MainController',
        controllerAs: 'main',
        templateUrl: 'app/main/main.tpl.html'
      })
      .state('card', {
        url: '/card/:email',
        controller: 'NgCardController',
        controllerAs: 'card',
        templateUrl: 'app/components/ngCard/ngCard.tpl.html'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
