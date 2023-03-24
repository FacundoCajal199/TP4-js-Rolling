/*Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.*/


// Crear el objeto "cuenta"
let cuenta = {
    titular: "Alex",
    saldo: 0,
    ingresar: function(cantidad) {
      this.saldo += cantidad;
    },
    extraer: function(cantidad) {
      if (cantidad <= this.saldo) {
        this.saldo -= cantidad;
      } else {
        document.write("No tienes suficiente saldo en tu cuenta.");
      }
    },
    informar: function() {
      document.write(`<br>Titular: ${this.titular}<br> Saldo: ${this.saldo}`);
    }
  };
  
  // Mostrar la descripción inicial de la cuenta
  document.write("Descripción inicial de la cuenta:");
  cuenta.informar();
  
  // Ingresar dinero en la cuenta
  cuenta.ingresar(1000);
document.write("<br>Se han ingresado 1000 en la cuenta:");
  
  // Mostrar la descripción actualizada de la cuenta
  cuenta.informar();
  
  // Retirar dinero de la cuenta
  cuenta.extraer(500);
 document.write("<br>Se han extraído 500 de la cuenta:");
  
  // Mostrar la descripción actualizada de la cuenta
  cuenta.informar();