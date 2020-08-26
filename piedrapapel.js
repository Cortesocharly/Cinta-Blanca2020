function aleatorio(minimo, maximo)
{
	var numero = Math.floor( Math.random () * (maximo - minimo + 1) + minimo);
	return numero;
}
var piedra = 0;
var papel = 1;
var tijera = 2;

var opciones = ["Piedra", "Papel", "Tijera"];
var opcionUsuario;
var lamaquina = aleatorio(0,2);

opcionUsuario = prompt("Gana a la máquina con este juego. ¡Elige uno!\nPiedra: 0\nPapel: 1\nTijera: 2" , 0);

alert("La maquina eligió:" + opciones[lamaquina]);

if(opcionUsuario == piedra)
{
  alert("¡Elegiste Piedra!");
  if(lamaquina == piedra)
  {
  	alert("¡Empate!");
  }
  else if(lamaquina == papel)
  {
    alert("¡Perdiste! :(");
  }
  else if(lamaquina == tijera)
  {
    alert("¡Ganaste! :)");
  }
}

else if(opcionUsuario == papel)
{
  alert("Elegiste Papel!");
  if(lamaquina == piedra)
  {
    alert("¡Ganaste!:)");
  }
  else if(lamaquina == papel)
  {
    alert("¡Empate!");
  }
  else if(lamaquina == tijera)
  {
    alert("¡Perdiste! :(");
  }
}
else if(opcionUsuario == tijera)
{
	alert("Elegiste Tijera!");
	if(lamaquina == piedra)
    {
      alert("¡Perdiste! :(");
    }


    else if(lamaquina == papel)
    {
      alert("¡Ganaste! :)");
    }

    else if(lamaquina == tijera)
    {
      alert("¡Empate!");
    }
}
else
{
	alert("Debes elegir 0,1 ó 2, sonso");
}
