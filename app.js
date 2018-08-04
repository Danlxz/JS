

//  Datos del jugador

function Player(nombre,clase) {
	this.nombre = nombre;
	this.clase = clase;
	this.hp = 100;
	this.sp = 100;
}


// Prototipos (acciones)

Player.prototype.mostrarDatos = function(){
	this.nombre = this.nombre || "< Sin Nombre >";
	this.clase = this.clase || "< Sin Clase >";
	console.log("> Jugador: "+this.nombre+" - "+"Clase: "+this.clase+" - "+"Hp: "+this.hp+" - "+"Sp: "+this.sp);
};

Player.prototype.batallar = function() {
	if (this.nombre === "< Sin Nombre >") {
		console.error("> Error: Nombre de jugador no definido.");
	}else{
		if (this.clase === "< Sin Clase >") {
			console.error("> Error: Clase de jugador no definido.");			
		}else{
			var a = (this.hp > 40)? this.hp -= 40:this.hp = 0;
			
			var b = (this.hp === 0)? console.error("> Jugador: "+this.nombre+" Ha muerto."):
			console.warn("> Jugador: "+this.nombre+" Sobrevivio en batalla.");
			
			var c = (this.sp > 20)? this.sp -= 20:this.sp = 0;
		}
	}
};

Player.prototype.curar = function (objetivo) {
	if (this.nombre === "< Sin Nombre >") {
		console.error("> Error: Nombre de jugador no definido.");
	}else{
		if (this.clase === "< Sin Clase >") {
			console.error("> Error: Clase de jugador no definido.");			
		}else{
			var a = (this.sp > 20)? this.sp -= 20:this.sp = 0;

			var b = (this.sp === 0)? console.error("> Jugador: "+this.nombre+" Sin sp."):
			console.warn("> Jugador: "+this.nombre+" Perdio 20 sp.");

			var c = (objetivo.hp < 100)? objetivo.hp += 30:objetivo.hp == 100;
			
			var d = (objetivo.hp === 100)? console.error("> Jugador: "+objetivo.nombre+" Ha sido curado completamente."):
			console.warn("> Jugador: "+objetivo.nombre+" Aun no se ha curado por completo.");
		}
	}
};

Player.prototype.recargar = function() {
	if (this.nombre === "< Sin Nombre >") {
		console.error("> Error: Nombre de jugador no definido.");
	}else{
		if (this.clase === "< Sin Clase >") {
			console.error("> Error: Clase de jugador no definido.");			
		}else{
			var r = (this.sp < 100)? this.sp += 10:
			console.info("> Jugador: "+this.nombre+" Recargo por completo.");
		}
	}
};


// Llenando datos

var player1 = new Player("Lucas","Soporte");
var player2 = new Player("Juan","Guerrero");

function iniciar () {
	alert("JUEGO INCIADO - JUGADOR 1 REGISTRADO");
	var cajaNombre = document.getElementById("txt");
	var cajaClase = document.getElementById("txt2");
	var nom = cajaNombre.value;
	var cl = cajaClase.value;
	player1 = new Player(nom,cl);
}

function iniciar2 () {
	alert("JUEGO INCIADO - JUGADOR 2 REGISTRADO");
	var cajaNombre = document.getElementById("txt");
	var cajaClase = document.getElementById("txt2");
	var nom = cajaNombre.value;
	var cl = cajaClase.value;
	player2 = new Player(nom,cl);
}


// Metodos (Botones - Comandos)

function estado(){
	console.warn("> ESTADO GENERAL PLAYERS:");
    player1.mostrarDatos();
    player2.mostrarDatos();
}
function batallaClick(){
	console.warn("> BATALLA <");
	player1.batallar();
	player2.batallar();
}
function curarClick(){
	console.warn("> CURAR <");
	player1.curar(player2);
}
function recargarClick(){	
	console.warn("> RECARGAR <");
	player1.recargar();
	player2.recargar();
}


