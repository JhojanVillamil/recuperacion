function insertarNombre(evt) {
    evt.preventDefault();
  
    let nombre = document.getElementById("nombre").value;
  
    if (nombre == "") {
      alert("El nombre no puede estar vacio");
    } else {
      let opcion = "<li> " + nombre + "</li>";
  
      let lista = document.getElementById("lista-nombres");
  
      lista.innerHTML += opcion;
  
      alert("Se ha insertado el nombre");
    }
  //primero
  }

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  function generarNumeros() {
  
    let elementos = document.getElementById("elementos");
  
    let opcionesGeneradas = "";
    for (let i = 0; i < 10; i++) {
      opcionesGeneradas += "<option>" + getRandomInt(1, 100) + "</option>";
    }
  
    elementos.innerHTML = opcionesGeneradas;
  
  }
 //segundo
{
 var diasVida = parseInt(prompt("Cuántos días has vivido",""));

 var numAnos = Math.floor(diasVida / 365);
 var diasRestantes = diasVida % 365 ;
 var numMeses = Math.floor(diasRestantes / 30);
 diasRestantes = diasRestantes % 30;
 
 alert("Ha vivido " + numAnos + " años, " + numMeses + " meses y " + diasRestantes + " días.");
}

   // Obtener referencia a botón
// Recuerda: el numeral o # indica id
const boton = document.querySelector("#miBoton");
// Agregar listener
boton.addEventListener("click", function(evento){
	// Aquí todo el código que se ejecuta cuando se da click al botón
	alert("Le has dado click");
});
var cartas = new Array( 
    {nombre: '1', seleccion: false}, {nombre: '2', seleccion: false}, 
    {nombre: '3', seleccion: false}, {nombre: '4', seleccion: false}, 
    {nombre: '5', seleccion: false}, {nombre: '6', seleccion: false}, 
    {nombre: '7', seleccion: false}, {nombre: '8', seleccion: false}, 
    {nombre: '1', seleccion: false}, {nombre: '2', seleccion: false}, 
    {nombre: '3', seleccion: false}, {nombre: '4', seleccion: false}, 
    {nombre: '5', seleccion: false}, {nombre: '6', seleccion: false}, 
    {nombre: '7', seleccion: false}, {nombre: '8', seleccion: false} );
      
  var intentos = 0;
  var jugada1 = "";
  var jugada2 = "";
  var identificadorJ1 = "";
  var identificadorJ2 = "";
  
  function iniciarJuego () {  
    var dato = document.getElementById("juego");
    dato.style.opacity = 1;
  
    cartas.sort(function() {return Math.random() - 0.5});
    for ( var i = 0 ; i < 16 ; i++ ) {
      var carta = cartas[i].nombre;
      var dato = document.getElementById( i.toString() );
      dato.dataset.valor = carta;
    }
  };
  
  function resetearJuego () {
    cartas.sort(function() {return Math.random() - 0.5});
    for ( var i = 0 ; i < 16 ; i++ ) {
      var carta = cartas[i].nombre;
      var dato = document.getElementById( i.toString() );
      dato.dataset.valor = carta;
      colorCambio( i, 'black', '?');
    } 
  }
  
  function girarCarta () {
    var evento = window.event;
  
    jugada2 = evento.target.dataset.valor;
    identificadorJ2 = evento.target.id;
  
  
    if ( jugada1 !== "" ) {
  
      if ( jugada1 === jugada2 && identificadorJ1 !== identificadorJ2 && cartas[parseInt(identificadorJ2)].seleccion != true &&               cartas[parseInt(identificadorJ1)].seleccion != true) {
        
        cartas[parseInt(identificadorJ1)].seleccion = true;
        cartas[parseInt(identificadorJ2)].seleccion = true;
  
        colorCambio(identificadorJ2, "blue", jugada2);
        vaciar();
        comprobar();
      }else if(identificadorJ1 !== identificadorJ2){
        var self = this;
        setTimeout(function(){
          colorCambio(self.identificadorJ1, "black", "?")
          colorCambio(self.identificadorJ2, "black", "?")
          vaciar()
        },200); 
  
        colorCambio(identificadorJ2, "blue", jugada2);
      }
    } else if(jugada2 !== "valor") {
  
      colorCambio(identificadorJ2, "blue", jugada2);
  
      jugada1 = jugada2;
      identificadorJ1 = identificadorJ2;
    }
  };
  
  function vaciar ()  {
    jugada1 = ""; 
    jugada2 = ""; 
  
    identificadorJ1 = "";
    identificadorJ2 = "";
  }
  
  function colorCambio (posicion, color, contenido) {
    document.getElementById(posicion.toString()).style.backgroundColor = color;
    document.getElementById(posicion.toString()).innerHTML = contenido;
  } 
  
  function comprobar () {
    var aciertos = 0;
    for( var i = 0 ; i < 16 ; i++ ){
      if ( cartas[i].seleccion == true ) {
        aciertos ++;
      }
  
    }
  
    if(aciertos == 16){
      document.getElementById("juego").innerHTML = "GANASTE";
    }
  }
  
  function resetearJuego () {
        cartas.sort(function() { return Math.random() - 0.5});
        for ( var i = 0; i < 16 ; i++ ) {
          var carta = cartas[i].nombre;
          var dato = document.getElementById( i.toString() );
          dato.dataset.valor = carta;
          colorCambio(i, 'black', '?');
        }
      };

      {
        function porcentaje_hombre_mujer(){
      var h,m,ambos, val1,val2;

    h = parseInt(prompt("ingrese la cantidad de hombres"));
    m = parseInt(prompt("ingrese la cantidad de mujeres"));
    ambos = h + m;
    val1 = (h*100)/ambos;
    val2 = (m*100)/ambos;
    alert("el porcentaje de hombres es de: " + val1 + "%" + "\nel porcentaje de mujeres es de: " + val2 + "%");
      }
    }