/* global ionic, define */
define([
  'app',
  'services/event'
], function (app) {
  'use strict';

  app.controller('DetailLocalizacaoCtrl', [
    '$scope',
    '$stateParams',
    '$window',
    '$ionicPopup',
    'eventService',
    function ($scope, $stateParams, $window, $ionicPopup, eventService) {
      $scope.loading = true;
      eventService.getOne($stateParams.id).then(function (event) {
        $scope.event = event;
        $scope.events = [event];
      }).finally(function () {
        $scope.loading = false;
      });

      $scope.reload = function () {
        eventService.getOne($stateParams.id).then(function (event) {
          $scope.event = event;
        }).finally(function () {
          $scope.$broadcast('scroll.refreshComplete');
        });
      };

      $scope.report = function () {
        $ionicPopup.prompt({
          scope: $scope,
          title: '<span class="energized">Comentário</span>',
          subTitle: '<span class="stable">Preencha abaixo o seu comentário:</span>',
          inputType: 'text',
          inputPlaceholder: '',
          cancelText: 'Cancelar'
        }).then(function (res) {
          if (res) {
            // here connect to backend and send report
          }
        });
      };
    }
  ]);
});
