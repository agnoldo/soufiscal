define([
  'app'
], function (app) {
  'use strict';
  // the run blocks
  app.run([
    '$ionicPlatform', '$state',
    function ($ionicPlatform, $state) {
      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }
        try {
          navigator.splashscreen.hide();
        } catch(err) {
        }

//        if (!window.localStorage['token_login']) {
          $state.go('login_signup');
//        }
      });
    }
  ]);
});
