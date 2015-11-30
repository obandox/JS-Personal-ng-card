(function() {
  'use strict';

  angular
    .module('ngCard')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
