app.config(function($stateProvider, $urlRouterProvider) {


$stateProvider

    .state('login', {
      url: "/login",
      templateUrl: "login.html",
      controller:"LoginController"
    })

    .state('listagem', {
      url: "/listagem",
      templateUrl: "listagem.html",
      controller: "ListagemController as ListCtrl"
    });

    $urlRouterProvider.otherwise('login');

});
