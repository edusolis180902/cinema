var controllerpelicula = require ('./controllerpelicula.js');
module.exports = function(app){

	var clasepelicula = new controllerpelicula() ;
	app.post('/api/nuevapelicula', clasepelicula.Guardar);
	app.post('/api/modificapelicula',clasepelicula.Modificar);
	app.post('/api/eliminapelicula',clasepelicula.Eliminar);
	app.post('/api/seleccionapelicula',clasepelicula.Seleccionartodos);
	app.post('/api/seleccioneporfecha',clasepelicula.Seleccionarporid);
	app.post('/api/seleccionarpornombre',clasepelicula.Seleccionarpornombre);


	app.get('*',function(req,res ){
		//localhost
		res.sendfile('./login.html'); 
	});
};