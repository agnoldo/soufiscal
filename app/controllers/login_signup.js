define([
  'app',
  'services/event'
], function (app) {
  'use strict';

  app.controller('LoginSignupCtrl', [
    '$scope',
    '$state',
    'eventService',
    'dataService',
    '$timeout',
    function ($scope, $state, eventService, dataService, $timeout) {
      $scope.tab = 'Login';
      $scope.localizacao_coordenadas = true;
      $scope.criarUsuarioAnonimo = function() {
        console.log('criarUsuarioAnonimo 1');
        $timeout(function () {
          console.log('criarUsuarioAnonimo 2');
          $scope.usuario_anonimo = "usr" + ((new Date()).getTime() % 9999991);
          $scope.senha_anonima = dataService.randomString(10, '#aA');
          console.log('criarUsuarioAnonimo 3: ' + $scope.usuario_anonimo);
        }, 2000);
      };
      $scope.entrar = function() {
        window.localStorage['token_login'] = true;
        $state.go('menu');
      };
    }
  ]);
});
