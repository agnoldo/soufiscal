// The main app definition
// --> where you should load other module depdendencies
define([
  'ionic'
], function () {
  'use strict';

  // the app with its used plugins
  var app = angular.module('app', [
    'ionic', 'ionic-sidetabs', 'ionic.ion.autoListDivider', 'ionic-datepicker'
  ])
  .config(function (ionicDatePickerProvider) {
    var datePickerObj = {
      inputDate: new Date(),
      setLabel: 'Definir',
      todayLabel: 'Hoje',
      closeLabel: 'Fechar',
      mondayFirst: false,
      weeksList: ["D", "S", "T", "Q", "Q", "S", "S"],
      monthsList: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
      templateType: 'popup',
      showTodayButton: true,
      dateFormat: 'dd/MM/yyyy',
      closeOnSelect: false,
    };
    ionicDatePickerProvider.configDatePicker(datePickerObj);
  });
  // return the app so you can require it in other components
  return app;
});
