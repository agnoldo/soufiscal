define([
  'app',
  // Load Controllers here
  'controllers/app',
  'controllers/login_signup',
  'controllers/menu',
  'controllers/dashboard',
  'controllers/tarefas',
  'controllers/list',
  'controllers/list_redirect',
  'controllers/list_reg',
  'controllers/list_uf',
  'controllers/list_br',
  'controllers/deolho',
  'controllers/comunidade',
  //'controllers/configuracoes',
  'controllers/results',
  'controllers/detail',
  'controllers/detail_todos',
  'controllers/detail_tarefas',
  'controllers/detail_regtarefa',
  'controllers/detail_soltarefa',
  'controllers/detail_localizacao',
  'controllers/detail_timeline'
], function (app) {
  'use strict';
  // definition of routes
  app.config([
    '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      // url routes/states
      $urlRouterProvider.otherwise('menu');

      $stateProvider
        // app states
        .state('dashboard', {
          url: '/dashboard',
          controller: 'DashboardCtrl',
          templateUrl: 'app/templates/dashboard.html',
        })
        .state('login_signup', {
          url: '/login_signup',
          controller: 'LoginSignupCtrl',
          templateUrl: 'app/templates/login_signup.html',
        })
        .state('menu', {
          url: '/menu',
          controller: 'MenuCtrl',
          templateUrl: 'app/templates/menu.html',
        })
        .state('tarefas', {
          url: '/tarefas',
          controller: 'TarefasCtrl',
          templateUrl: 'app/templates/tarefas.html',
        })
        .state('list', {
          url: '/list/:id/:modalidade/:esfera_administrativa',
          controller: 'ListCtrl',
          templateUrl: 'app/templates/list.html',
        })
        .state('list_redirect', {
          url: '/list_redirect/:id',
          controller: 'ListRedirectCtrl'
        })
        .state('list_reg', {
          url: '/list_reg/:sigla/:regiao',
          controller: 'ListRegCtrl',
          templateUrl: 'app/templates/list_br.html',
        })
        .state('list_uf', {
          url: '/list_uf/:sigla',
          controller: 'ListUfCtrl',
          templateUrl: 'app/templates/list_br.html',
        })
        .state('list_br', {
          url: '/list_br',
          controller: 'ListBrCtrl',
          templateUrl: 'app/templates/list_br.html',
        })
        .state('deolho', {
          url: '/deolho',
          controller: 'DeolhoCtrl',
          templateUrl: 'app/templates/deolho.html',
        })
        .state('results', {
          url: '/results/:search/:satTrans/:wheelChair/:wheelChairLift',
          controller: 'ResultsCtrl',
          templateUrl: 'app/templates/results.html'
        })
        .state('comunidade', {
          url: '/comunidade',
          controller: 'ComunidadeCtrl',
          templateUrl: 'app/templates/comunidade.html'
        })
        .state('detail', {
          url: '/detail/:id',
          controller: 'DetailCtrl',
          templateUrl: 'app/templates/detail.html'
        })
        .state('detail_localizacao', {
          url: '/detail_localizacao/:id',
          controller: 'DetailLocalizacaoCtrl',
          templateUrl: 'app/templates/detail_localizacao.html'
        })
        .state('detail_tarefas', {
          url: '/detail_tarefas/:id',
          controller: 'DetailTarefasCtrl',
          templateUrl: 'app/templates/detail_tarefas.html'
        })
        .state('detail_regtarefa', {
          url: '/detail_regtarefa/:id',
          controller: 'DetailRegTarefaCtrl',
          templateUrl: 'app/templates/detail_regtarefa.html'
        })
        .state('detail_soltarefa', {
          url: '/detail_soltarefa/:id',
          controller: 'DetailSolTarefaCtrl',
          templateUrl: 'app/templates/detail_soltarefa.html'
        })
        .state('detail_todos', {
          url: '/detail_todos/:id',
          controller: 'DetailTodosCtrl',
          templateUrl: 'app/templates/detail_todos.html'
        })
        .state('detail_timeline', {
          url: '/detail_timeline/:id',
          controller: 'DetailTimelineCtrl',
          templateUrl: 'app/templates/detail_timeline.html'
        });
    }
  ]);
});
