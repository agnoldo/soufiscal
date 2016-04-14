define([
  'app',
  'services/event',
  'directives/googleMaps'
], function (app) {
  'use strict';

  app.controller('ListBrCtrl', [
    '$scope',
    '$stateParams',
    '$state',
    '$timeout',
    '$ionicHistory',
    'eventService',
    'dataService',
    function ($scope, $stateParams, $state, $timeout, $ionicHistory, eventService, dataService) {
      var first = true;
      $scope.limit = 20;
      $scope.show = {
        list: true
      };
      $scope.lists = dataService.brasil.ufs;
      $scope.lists.forEach(function(item) {
        item.thumb = 'img/uf/' + item.sigla + '.png';
        item.descricao = item.total_municipios + ' municípios'
        item.descricao = 'Capital: ' + item.nome_capital + '/' + item.sigla;
        item.descricao2 = 'Municípios: ' + item.total_municipios;
      });
      $scope.titulo_painel = 'Unidades Federativas';
      $scope.titulo = 'Todo o Brasil (27 Unidades Federativas)';

      $scope.reload = function () {
        $scope.loading = true;
        eventService.search("", $scope.wheelChair, $scope.wheelChairLift).then(function (events) {
          var TAMANHO_PAGINA = 20;
          $scope.limit = 20;
          $scope.events = events;
          $scope.total = events.length;
          $scope.iniciais = Math.min(TAMANHO_PAGINA, $scope.total);
        }).finally(function () {
          $scope.loading = false;
          $scope.$broadcast('scroll.refreshComplete');
        });
      };

      $scope.goToMap = function () {
        $ionicHistory.currentView($ionicHistory.backView());
        $ionicHistory.nextViewOptions({
          disableAnimate: true
        });
        $state.go('list.map', {
          search: $scope.string,
          wheelChair: $scope.wheelChair,
          wheelChairLift: $scope.wheelChairLift
        });
      };
      $scope.goToList = function () {
        $ionicHistory.currentView($ionicHistory.backView());
        $ionicHistory.nextViewOptions({
          disableAnimate: true
        });
        $state.go('list.list', {
          search: $scope.search,
          wheelChair: $scope.wheelChair,
          wheelChairLift: $scope.wheelChairLift
        });
      };
    }
  ]);
});
