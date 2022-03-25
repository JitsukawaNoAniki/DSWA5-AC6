angular.module('ifsp').controller('CursosController',
    function($resource, $scope) {
        $scope.cursos = [];
        $scope.filtro = '';
        $scope.mensagem = { texto: '' };
        var Curso = $resource('/cursos/:id');

        function buscaCursos() {
            Curso.query(
                function(cursos) {
                    $scope.cursos = cursos;
                    $scope.mensagem = {};
                },
                function(erro) {
                    console.log("Não foi possível obter a lista de cursos");
                    console.log(erro);
                    $scope.mensagem = { texto: "Não foi possível obter a lista de cursos" };
                }
            );
        }
        buscaContatos();
        $scope.remove = function(curso) {
            console.log(curso);
            Contato.delete({ id: curso._id },
                buscaCursos,
                function(erro) {
                    console.log("Não foi possível remover o cursoo");
                    console.log(erro);
                    $scope.mensagem = { texto: "Não foi possível remover o curso" };
                });
        };
    });