/* global ionic, define */
define([
  'app',
  'services/event'
], function (app) {
  'use strict';

  app.controller('DetailTarefasCtrl', [
    '$scope',
    '$stateParams',
    '$window',
    '$ionicPopup',
    'eventService',
    function ($scope, $stateParams, $window, $ionicPopup, eventService) {
      $scope.loading = true;
      eventService.getOne($stateParams.id).then(function (event) {
        $scope.event = event;
      }).finally(function () {
        $scope.loading = false;
      });
    }
  ]);
});
