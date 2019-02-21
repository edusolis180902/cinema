var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var pelicula = new Schema ({
	nombre: String,
	duracionminutos: Number,
	genero: String,
	IDIOMAAUDIO:String,
	IDIOMASUB:String,
	sinopsis: String,
	clasificacion: String,
	precio: Number,
	HORAINICIO: Number,
	fecha: Date,
	minutosinicio: Number,
	Asientos:{
		A1:{
			nombreestudiante: String,
			seccion: String,
			carnet:Number
		},
		A2:{
			nombreestudiante: String,
			seccion: String,
			carnet:Number
		},
		A3:{
			nombreestudiante: String,
			seccion: String,
			carnet:Number
		},
		A4:{
			nombreestudiante: String,
			seccion: String,
			carnet:Number
		},
		A5:{
			nombreestudiante: String,
			seccion: String,
			carnet:Number
		},
		A6:{
			nombreestudiante: String,
			seccion: String,
			carnet:Number
		},
		B1:{
			nombreestudiante: String,
			seccion: String,
			carnet:Number
		},
		B2:{
			nombreestudiante: String,
			seccion: String,
			carnet:Number
		},
		B3:{
			nombreestudiante: String,
			seccion: String,
			carnet:Number
		},
		B4:{
			nombreestudiante: String,
			seccion: String,
			carnet:Number
		},
		B5:{
			nombreestudiante: String,
			seccion: String,
			carnet:Number
		},
		B6:{
			nombreestudiante: String,
			seccion: String,
			carnet:Number
		},
		C1:{
			nombreestudiante: String,
			seccion: String,
			carnet:Number
		},
		C2:{
			nombreestudiante: String,
			seccion: String,
			carnet:Number
		},
		C3:{
			nombreestudiante: String,
			seccion: String,
			carnet:Number
		},
		C4:{
			nombreestudiante: String,
			seccion: String,
			carnet:Number
		},
		C5:{
			nombreestudiante: String,
			seccion: String,
			carnet:Number
		},
		C6:{
			nombreestudiante: String,
			seccion: String,
			carnet:Number
		},
		D1:{
			nombreestudiante: String,
			seccion: String,
			carnet:Number
		},
		D2:{
			nombreestudiante: String,
			seccion: String,
			carnet:Number
		},
		D3:{
			nombreestudiante: String,
			seccion: String,
			carnet:Number
		},
		D4:{
			nombreestudiante: String,
			seccion: String,
			carnet:Number
		},
		D5:{
			nombreestudiante: String,
			seccion: String,
			carnet:Number
		},
		E1:{
			nombreestudiante: String,
			seccion: String,
			carnet:Number
		},
		E2:{
			nombreestudiante: String,
			seccion: String,
			carnet:Number
		},
		E3:{
			nombreestudiante: String,
			seccion: String,
			carnet:Number
		},
		E4:{
			nombreestudiante: String,
			seccion: String,
			carnet:Number
		},
		F1:{
			nombreestudiante: String,
			seccion: String,
			carnet:Number
		},
		F2:{
			nombreestudiante: String,
			seccion: String,
			carnet:Number
		},
		F3:{
			nombreestudiante: String,
			seccion: String,
			carnet:Number
		},
		F4:{
			nombreestudiante: String,
			seccion: String,
			carnet:Number
		},
		G1:{
			nombreestudiante: String,
			seccion: String,
			carnet:Number
		},
		G2:{
			nombreestudiante: String,
			seccion: String,
			carnet:Number
		},
		G3:{
			nombreestudiante: String,
			seccion: String,
			carnet:Number
		},
		G4:{
			nombreestudiante: String,
			seccion: String,
			carnet:Number
		},
		H1:{
			nombreestudiante: String,
			seccion: String,
			carnet:Number
		},
		H2:{
			nombreestudiante: String,
			seccion: String,
			carnet:Number
		},
		H3:{
			nombreestudiante: String,
			seccion: String,
			carnet:Number
		},
		H4:{
			nombreestudiante: String,
			seccion: String,
			carnet:Number
		}},
		IMAGEN:String,
		ESTADO: Number,
});
module,exports = mongoose.model('pelicula',pelicula);
