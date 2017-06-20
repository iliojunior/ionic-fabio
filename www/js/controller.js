app.controller('appController', function($scope, $ionicPlatform){
  $ionicPlatform.ready(function() {

    //seu código aqui

  });
});

app.controller('LoginController', LoginController);

app.controller('ListagemController', ListagemController);

var dependPadroes = ['$scope', '$ionicPlatform', '$state'];
var lembretesDefault = [
    "Lembrete 1",
    "Lembrete 2",
    "Lembrete 3",
];

LoginController.$inject = dependPadroes;
function LoginController($scope, $ionicPlatform, $state) {
  $ionicPlatform.ready(function() {
    $scope.usuario = {};
    $scope.logar = logar;

    function logar(usuario) {

      if (usuario.email === "usuario@usuario.com" && usuario.senha === "123") {
        $state.go("listagem");
      } else {
        alert("Usuário inválido!");
      }
    }
  });
}

ListagemController.$inject = dependPadroes;
function ListagemController($scope, $ionicPlatform, $state) {
  $ionicPlatform.ready(function () {
    $scope.lembretes = angular.copy(lembretesDefault);
    $scope.addLembrete = addLembrete;
    $scope.novoLembrete = {};

    function addLembrete(novoLembrete) {
      $scope.lembretes.push(angular.copy(novoLembrete.lembrete));
      $scope.novoLembrete = {};
    }
  });
}
