var app = angular.module('myApp', []);

app.filter('greet', function() {
    return function(name, namess, surname) {
       return 'Hello, ' + name + '!';
     };
   })

app.controller('indexController',  ['$scope', function($scope){

    $scope.showNaoObrigatorios = false;
    
    
    $scope.fontes = [
        {id: 1, nome: "Cartório"},
        {id: 2, nome: "Prestador de assistência à saúde" },
        {id: 3, nome: "Parente" },
        {id: 4, nome: "Outro" },
        {id: 5, nome: "Desconhecido " }];
        
        $scope.paciente = {obito : {fonte: {id: 1, nome: "Cartório"}}};
        
    $scope.setShowNaoObrigatorios = function(value){
        $scope.showNaoObrigatorios = value;
    };

}]);