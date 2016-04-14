/* global ionic, define */
define([
  'app',
  'services/event'
], function (app) {
  'use strict';

  app.controller('DetailRegTarefaCtrl', [
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

      // capture callback
      var captureSuccess = function(mediaFiles) {
          var i, path, len;
          for (i = 0, len = mediaFiles.length; i < len; i += 1) {
              path = mediaFiles[i].fullPath;
              // do something interesting with the file
          }
      };
      // capture error callback
      var captureError = function(error) {
          navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
      };

      // start image capture
      $scope.captureImage = function() {
        navigator.device.capture.captureImage(captureSuccess, captureError, {limit:2});
      };

      // start image capture
      $scope.captureVideo = function() {
        navigator.device.capture.captureVideo(captureSuccess, captureError, {limit:2});
      };
    }
  ]);
});
