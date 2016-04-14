define([
  'app',
  'services/event'
], function (app) {
  'use strict';

  app.controller('MenuCtrl', [
    '$scope',
    '$state',
    'eventService',
    function ($scope, $state, eventService) {
      $scope.search = {};
    }
  ]);
});
