angular.module('alurapicActivity').controller('FotosControllerActivity', function($scope, $http){

    $scope.fotos = [];
    $scope.filter = '';

    $http.get('../v1/fotos').success(function(retorno){

        $scope.fotos = retorno;

    }).error(function(error){

        console.log(error);

    });

});