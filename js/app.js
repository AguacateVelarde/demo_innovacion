angular.module('starter', ['ionic', 'starter.controllers'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  
  
    .state('app.materias', {
      url: '/materias/:data',
      views: {
        'menuContent': {
          templateUrl: 'templates/materias.html',
          controller: 'materiasCtrl'
        }
      }
    })


    .state('app.resultados', {
      url: '/resultados/:valueT',
      views: {
        'menuContent': {
          templateUrl: 'templates/resultados.html',
          controller: 'materiasCtrl'
        }
      }
    })
   .state('app.selector', {
      url: '/selector',
      views: {
        'menuContent': {
          templateUrl: 'templates/selector.html',
          controller: 'materiasCtrl'
        }
      }
    })
    .state('app.portada',{
      url: '/portada',
      views:{
        'menuContent': {
          templateUrl: 'templates/portada.html',
          controller: 'portadaCtrl'
        }
      }
    })
     .state('app.config', {
      url: '/config',
      views: {
        'menuContent': {
          templateUrl: 'templates/config.html',
          controller: 'materiasCtrl'
        }
      }
    });
  $urlRouterProvider.otherwise('/app/portada');
});
