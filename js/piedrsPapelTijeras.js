/*Piedra-papel-tijera 👊🏻 ✋🏻 ✌🏻 :crear un script con toda la logica necesaria que solicite al usuario un movimiento (piedra - papel - tijera) la PC elija aleatoriamente un movimiento y al final mostrar por pantalla quien gano, luego preguntar si queremos jugar otra vez.*/

let jugarDeNuevo = true;

while (jugarDeNuevo) {
  const opcionesValidas = ["piedra", "papel", "tijera"];
  const opcionUsuario = prompt("Ingresa tu jugada (piedra, papel o tijera):").toLowerCase();

  if (!opcionesValidas.includes(opcionUsuario)) {
    alert("La opción ingresada no es válida");
    continue;
  }

  const opcionComputadora = opcionesValidas[Math.floor(Math.random() * opcionesValidas.length)];

  alert(`La computadora eligió ${opcionComputadora}`);

  if (opcionUsuario === opcionComputadora) {
    alert("Empate");
  } else if (opcionUsuario === "piedra" && opcionComputadora === "tijera" || opcionUsuario === "papel" && opcionComputadora === "piedra" || opcionUsuario === "tijera" && opcionComputadora === "papel") {
    alert("¡Ganaste!");
  } else {
    alert("Perdiste :(");
  }

  const jugarDeNuevoString = prompt("¿Quieres jugar de nuevo? (si/no)").toLowerCase();
  jugarDeNuevo = jugarDeNuevoString === "si";
}

alert("Gracias por jugar");