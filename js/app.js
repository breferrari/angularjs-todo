var app = angular.module("TpApp", ['ui.router', 'angular.filter']);

app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('tarefas', {
      url: "/",
      templateUrl: "templates/tarefas.html",
      controller: 'RootController'
    })
    .state('categorias', {
      url: "/categorias",
      templateUrl: "templates/categorias.html",
      controller: 'RootController'
    })
    .state('filtro', {
      url: "/filtro",
      templateUrl: "templates/filtro.html",
      controller: 'RootController'
    });
});
