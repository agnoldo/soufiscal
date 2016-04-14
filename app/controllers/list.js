define([
  'app',
  'services/event',
  'directives/googleMaps'
], function (app) {
  'use strict';

  app.controller('ListCtrl', [
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
      var list = dataService.lists.find(function isPrime(element, index, array) { return element.id == $stateParams.id; });
      if (list) {
        $scope.titulo = list.nome + ' (' + list.total + ')';
        $scope.modalidade = "-- Todas --";
        $scope.modalidades = list.modalidades_esferas_administrativas.reduce( function (prev, item) {
          if ( item.modalidade in prev ) {
            prev[item.modalidade].total += item.total;
          } else {
            prev[item.modalidade] = {
              total: item.total,
              nome: item.modalidade
            };
          }
          return prev;
        }, {} );
        $scope.modalidades["Todas"] = {
          total: list.total,
          nome: "-- Todas --"
        };
        $scope.esfera_administrativa = "-- Todas --";
        $scope.esferas_administrativas = list.modalidades_esferas_administrativas.reduce( function (prev, item) {
          if ( item.esfera_administrativa in prev ) {
            prev[item.esfera_administrativa].total += item.total;
          } else {
            prev[item.esfera_administrativa] = {
              total: item.total,
              nome: item.esfera_administrativa
            }
          }
          return prev;
        }, {} );
        $scope.esferas_administrativas["Todas"] = {
          total: list.total,
          nome: "-- Todas --"
        };
      }

      // show next 10
      $scope.loadMore = function () {
        if (!first) {
          $timeout(function () {
            $scope.limit += 20;
            $scope.$broadcast('scroll.infiniteScrollComplete');
          }, 2000);
          return;
        }
        first = false;

        var wheelChair = $stateParams.wheelChair === 'true',
            wheelChairLift = $stateParams.wheelChairLift === 'true',
            search = $stateParams.search;

        if (wheelChair !== $scope.wheelChair || wheelChairLift !== $scope.wheelChairLift || search !== $scope.search) {
          $scope.wheelChair = wheelChair;
          $scope.wheelChairLift = wheelChairLift;
          $scope.search = search;
          $scope.loading = true;
          eventService.search("", wheelChair, wheelChairLift).then(function (events) {
            var TAMANHO_PAGINA = 20;
            $scope.limit = 20;
            $scope.events = events;
            $scope.total = events.length;
            $scope.iniciais = Math.min(TAMANHO_PAGINA, $scope.total);
          }).finally(function () {
            $scope.loading = false;
            $scope.$broadcast('scroll.infiniteScrollComplete');
          });
        } else {
          $scope.$broadcast('scroll.infiniteScrollComplete');
        }
      };

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
