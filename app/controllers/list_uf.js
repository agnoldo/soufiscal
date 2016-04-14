define([
  'app',
  'services/event',
  'directives/googleMaps'
], function (app) {
  'use strict';

  app.controller('ListUfCtrl', [
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
      $scope.uf = dataService.uf;
      $scope.lists = $scope.uf.municipios;
      $scope.lists.forEach(function(item) {
        item.thumb = 'img/uf/' + $scope.uf.sigla + '.png';
        item.total_convenios = ((item.cod_siconv % 97) + 15);
        item.descricao = Math.round((Math.random() * (item.total_convenios - 3) + 2)) + ' proponentes'
        item.descricao2 = '';
      });
      $scope.titulo_painel = 'Minas Gerais';
      $scope.titulo = $scope.uf.sigla + ' (' + $scope.uf.metadados.total_registros + ' Municípios)';

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
