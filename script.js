window.addEventListener('load', function(e) {
  document.querySelector('#test').innerHTML = 'P,P,T,L,S';
}, false);

function aleatorio(minimo, maximo)
{
	var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo);
	return numero;
}

function ganaste()
{
alert("Ganaste!");
}
function perdiste()
{
alert("Perdiste!");
}
function empate()
{
alert("Empate");
}


alert("Bienvenido un buen juego de: \n Piedra, Papel, Tijera o Spock");
juego();

function juego()
{

var opciones = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];
var opcionUsuario;
var opcionMaquina = aleatorio(0,4);

opcionUsuario = prompt("Elige una opción \n 0. Piedra \n 1. Papel \n 2. Tijera \n 3. Lagarto \n 4. Spock");

if (opciones[opcionUsuario] == undefined)
{
alert("Elegiste mal!");
juego();
}

alert("Elegiste\n" + opciones[opcionUsuario]);
alert("La Máquina eligió\n" + opciones[opcionMaquina]);

if ( opcionMaquina == opcionUsuario)
   {
      empate();
   }

if (opcionUsuario == 0)
{
	if (opcionMaquina == 1)
	{
		perdiste();
	}
	else if (opcionMaquina == 2)
   {
      ganaste();
   }
   else if (opcionMaquina == 3)
   {
      ganaste();
   }
   else if (opcionMaquina == 4)
   {
      perdiste();
   }
}
 else if (opcionUsuario == 1)
   {
   if (opcionMaquina == 0)
   {
      ganaste();
   }
   else if (opcionMaquina == 2)
   {
      perdiste();
   }
   else if (opcionMaquina == 3)
   {
      perdiste();
   }
   else if (opcionMaquina == 4)
   {
      ganaste();
   }
}
}

