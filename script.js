window.addEventListener('load', function(e) {
  document.querySelector('#test').innerHTML = 'P,P,T,L,S';
}, false);

function aleatorio(minimo, maximo)
{
	var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo);
	return numero;
}

alert("Bienvenido un buen juego de: \n Piedra, Papel, Tijera o Spock");
juego();

function juego() 
{
var piedra = 0;
var papel = 1;
var tijera = 2;
var lagarto = 3;
var spock = 4;
var opciones = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];
var resultado = ["Ganaste!!!", "Perdiste!!!"];
var opcionUsuario;
var opcionMaquina = aleatorio(0,4);

opcionUsuario = prompt("Elige una opción \n 0. Piedra \n 1. Papel \n 2. Tijera \n 3. Lagarto \n 4. Spock");

alert("Elegiste\n" + opciones[opcionUsuario]);
alert("La Máquina eligió\n" + opciones[opcionMaquina]);

if (opciones[opcionUsuario] == opciones[0])
{
	if (opciones[opcionMaquina] == opciones[2],[3])
	{
		alert("Ganaste!");
	}
	else if (opciones[opcionMaquina] == opciones[1],[4])
	{
		alert("Perdiste");
	}
	else if (opciones[opcionUsuario] == opciones[opcionMaquina])
	{
        alert("Empate!!!");
	}
}
}

