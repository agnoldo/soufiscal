define([
  'app',
  'services/event'
], function (app) {
  'use strict';

  app.controller('DashboardCtrl', [
    '$scope',
    '$state',
    'eventService',
    'dataService',
    function ($scope, $state, eventService, dataService) {
      $scope.search = {};
      $scope.goToList = function () {
        $state.go('results', {
          search: $scope.search.string,
          satTrans: $scope.search.satTrans,
          wheelChair: $scope.search.wheelChair,
          wheelChairLift: $scope.search.wheelChairLift
        });
      };

      $scope.list = function (list_id) {
        switch(list_id) {
          case 1:
            $state.go('list', { id: list_id }); break;
          case 2:
            $state.go('list_reg', { id: list_id }); break;
          case 3:
            $state.go('list_uf', { id: list_id }); break;
          case 4:
            $state.go('list_br'); break;
        }
      };

      $scope.loadNext = function () {
        eventService.getNext().then(function (events) {
          var TAMANHO_PAGINA = 10;
          $scope.events = events;
          $scope.total = events.length;
          $scope.iniciais = Math.min(TAMANHO_PAGINA, $scope.total);
        }).finally(function () {
          $scope.$broadcast('scroll.infiniteScrollComplete');
        });
      };

      $scope.lists = dataService.lists;
      $scope.lists.forEach(function(item) {
        switch(item.id) {
          case 1:
            item.dest_state = '/#/list/1//'; break;
          case 2:
            item.dest_state = '/#/list_reg/MG/1'; break;
          case 3:
            item.dest_state = '/#/list_uf/MG'; break;
          case 4:
            item.dest_state = '/#/list_br'; break;
        }
      });
    }
  ]);
});
