var cursos = [
    {_id: 1, nome: 'ADS'}
]
   
   module.exports = function() {
       var controller = {};
       controller.listaCursos = function(req, res) {
           res.json(cursos);
       };
       controller.obtemCurso = function(req, res) {
           console.log('Selecionou o curso: ' + req.params.id);
           var idCurso = req.params.id;
           var curso = cursos.filter(function(curso) {
               return curso._id == idCurso;
           })[0];
           contato ? res.json(curso) : res.status(404).send('Curso não encontrado!');
       };
       controller.removeCurso = function(req, res) {
           var idCurso = req.params.id;
           cursos = cursos.filter(function(curso) {
               return curso._id != idCurso;
           });
           res.send(204).end();
       };
       return controller;
   };