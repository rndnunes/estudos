angular.module('alurapic').controller('FotosController', function($scope, $http){

    $scope.fotos = [];
    $scope.filtro = '';

    $http.get('v1/fotos').success(function(retorno){

        $scope.fotos = retorno;

    }).error(function(error){

        console.log(error);
    
    });

});