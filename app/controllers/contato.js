var contatos = [
 {_id: 1, nome: 'Fabio Teixeira', email: 'fabio.teixeira@ifsp.edu.br'},
 {_id: 2, nome: 'Fabiano Teixeira', email: 'fabiano.teixeira@ifsp.edu.br'},
 {_id: 3, nome: 'Melissa Teixeira', email: 'melissa.teixeira@ifsp.edu.br'},
 {_id: 4, nome: 'YoMama', email: 'YoMama@myBed.com'},
 {_id: 5, nome: 'Tomas Turbando', email: 'Tomas@ifsp.edu.br'},
 {_id: 6, nome: 'Mike Oxlong', email: 'Mike@ifsp.edu.br'},
 {_id: 7, nome: 'Hugh Janus', email: 'Hugh@ifsp.edu.br'},
 {_id: 8, nome: 'Ben Dover', email: 'Ben@ifsp.edu.br'}
]

module.exports = function(){
	var controller = {};
	controller.listaContatos = function(req, res){
		res.json(contatos);
	};
	controller.obtemContato = function(req, res) {
		console.log('Selecionou o contato: ' + req.params.id);
		var idContato = req.params.id;
		var contato = contatos.filter(function(contato){
			return contato._id == idContato;
		})[0];
		contato ? res.json(contato) : res.status(404).send('Contato não encontrado!');
	};
	controller.removeContato = function(req, res) {
		var idContato = req.params.id;
		contatos = contatos.filter(function(contato) {
			return contato_id != idContato;
		});
		res.send(204).end();
	}
	return controller;
};