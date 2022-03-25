angular.module('ifsp').controller('CursoController',
    function($scope, $routeParams, $resource) {
        var Contato = $resource('/curso/:id');
        Contato.get({ id: $routeParams.cursoId },
            function(curso) {
                $scope.curso = curso;
            },
            function(erro) {
                $scope.mensagem = {
                    texto: 'Não foi possível obter o curso.'
                };
                console.log($routeParams.cursoId);
            }
        );
    });