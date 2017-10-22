$http.get('v1/fotos')
.then(function(retorno) {
  $scope.fotos = retorno.data;
})
.catch(function(erro) {
  // trata o erro
});


$http.get('v1/fotos').success(function(retorno){

    $scope.fotos = retorno;

}).error(function(error){

    console.log(error);

});