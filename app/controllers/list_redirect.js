define([
  'app',
  'services/event'
], function (app) {
  'use strict';

  app.controller('ListRedirectCtrl', [
    '$stateParams',
    '$state',
    function ($stateParams, $state) {
      switch($stateParams.id) {
        case "1":
          $state.go('list', { id: $stateParams.id }, {location:'replace'}); break;
        case "2":
          $state.go('list_reg', { id: $stateParams.id }, {location:'replace'}); break;
        case "3":
          $state.go('list_uf', { id: $stateParams.id }, {location:'replace'}); break;
        case "4":
          $state.go('list_br', {location:'replace'}); break;
      }
    }
  ]);
});
