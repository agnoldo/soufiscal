define([
  'app',
  'services/event'
], function (app) {
  'use strict';

  app.controller('ComunidadeCtrl', [
    '$scope',
    '$state',
    'eventService',
    function ($scope, $state, eventService) {
      $scope.search = {};
      $scope.usr = {
        nome: 'Jonathan Sveiverson',
        cidade: 'Jaboticatubas / MG',
        imagem: 'http://api.randomuser.me/portraits/men/' + ((new Date()).getTime() % 100) + '.jpg'
      };
    }
  ]);
});
