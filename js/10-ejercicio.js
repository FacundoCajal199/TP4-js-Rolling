/*crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje.
Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje que indique que el avión está lleno.

Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones con diferentes destinos. Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.

class Aeropuerto{
 constructor (nombreAeropuerto,listaDeAviones){
         this.nombreAeropuerto = nombreAeropuerto
         this.listaDeAviones= listaDeAviones
    }

    agregarAvion(){

    }
    buscarAvion(){

    }
}

*/



class Aeropuerto {
    constructor(nombreAeropuerto) {
      this.nombreAeropuerto = nombreAeropuerto;
      this.listaAviones = [];
    }
  
    agregarAvion(avion) {
      this.listaAviones.push(avion);
    }
  
    buscarAvion(nombre) {
      for (let i = 0; i < this.listaAviones.length; i++) {
        if (this.listaAviones[i].nombre === nombre) {
          return this.listaAviones[i];
        }
      }
      return null;
    }
  }
  
  class Avion {
    constructor(nombre, capacidad, destino) {
      this.nombre = nombre;
      this.capacidad = capacidad;
      this.destino = destino;
      this.listaPasajeros = [];
    }
  
    abordar(pasajero) {
      if (this.listaPasajeros.length < this.capacidad) {
        this.listaPasajeros.push(pasajero);
        console.log(`El pasajero ${pasajero} abordó el avión ${this.nombre}.`);
      } else {
        console.log(`El avión ${this.nombre} está lleno. No se puede abordar.`);
      }
    }
  }
  
  // Creamos un objeto de tipo aeropuerto
  const aeropuertoInternacional = new Aeropuerto("Aeropuerto Internacional");
  
  // Creamos 3 objetos aviones con diferentes destinos
  const avion1 = new Avion("Avión 1", 100, "Madrid");
  const avion2 = new Avion("Avión 2", 200, "Nueva York");
  const avion3 = new Avion("Avión 3", 150, "Londres");
  
  // Agregamos los 3 aviones al aeropuerto
  aeropuertoInternacional.agregarAvion(avion1);
  aeropuertoInternacional.agregarAvion(avion2);
  aeropuertoInternacional.agregarAvion(avion3);
  
  // Buscamos un avión y usamos el método abordar
  const avionEncontrado = aeropuertoInternacional.buscarAvion("Avión 3");
  if (avionEncontrado) {
    avionEncontrado.abordar("Juan");
  } else {
    console.log("No se encontró el avión buscado.");
  }