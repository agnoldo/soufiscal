/* global ionic, define */
define([
  'app',
  'services/event'
], function (app) {
  'use strict';

  app.controller('DetailSolTarefaCtrl', [
    '$scope',
    '$stateParams',
    '$window',
    '$ionicPopup',
    'eventService',
    'ionicDatePicker',
    function ($scope, $stateParams, $window, $ionicPopup, eventService, ionicDatePicker) {
      $scope.loading = true;
      eventService.getOne($stateParams.id).then(function (event) {
        $scope.event = event;
        var ipObj1 = {
              callback: function (val) {  //Mandatory
                console.log('Return value from the datepicker popup is : ' + val, new Date(val));
                $scope.data_limite = new Date(val);
              },
//              from: event.data_inicial, //Optional
//              to: event.data_final, //Optional
              inputDate: new Date(),      //Optional
              mondayFirst: true,          //Optional
              closeOnSelect: false,       //Optional
              templateType: 'popup'       //Optional
        };
        console.log('bind openDatePicker');
        $scope.openDatePicker = function(){
          console.log('openDatePicker');
          ionicDatePicker.openDatePicker(ipObj1);
        };
      }).finally(function () {
        $scope.loading = false;
      });

    }
  ]);
});
