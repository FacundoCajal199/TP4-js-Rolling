/* realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando por defecto (10).

Los métodos de la agenda serán los siguientes:

*aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
*existeContacto(Contacto): indica si el contacto pasado existe o no.
*listarContactos(): Lista toda la agenda
*buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
*eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
*agendaLlena(): indica si la agenda está llena.
*huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.*/

class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }
}

class Agenda {
  constructor(capacidad = 10) {
    this.contactos = [];
    this.capacidad = capacidad;
  }

  aniadirContacto(contacto) {
    if (!this.agendaLlena()) {
      if (!this.existeContacto(contacto)) {
        this.contactos.push(contacto);
        document.write(
          `El contacto ${contacto.nombre} se ha añadido a la agenda.`
        );
      } else {
        document.write(
          `<br>El contacto ${contacto.nombre} ya existe en la agenda.`
        );
      }
    } else {
      document.write("<br>La agenda está llena. No se puede añadir más contactos.");
    }
  }

  existeContacto(contacto) {
    return this.contactos.some((c) => c.nombre === contacto.nombre);
  }

  listarContactos() {
    document.write("--- Agenda ---");
    this.contactos.forEach((c) => document.write(`${c.nombre}: ${c.telefono}`));
  }

  buscarContacto(nombre) {
    const contacto = this.contactos.find((c) => c.nombre === nombre);
    if (contacto) {
      document.write(`${contacto.nombre}:<br> ${contacto.telefono}`);
    } else {
      document.write(`<br>El contacto ${nombre} no existe en la agenda.`);
    }
  }

  eliminarContacto(contacto) {
    const index = this.contactos.findIndex((c) => c.nombre === contacto.nombre);
    if (index !== -1) {
      this.contactos.splice(index, 1);
      document.write(
        `<br>El contacto ${contacto.nombre} se ha eliminado de la agenda.`
      );
    } else {
      document.write(`<br>El contacto ${contacto.nombre} no existe en la agenda.`);
    }
  }

  agendaLlena() {
    return this.contactos.length === this.capacidad;
  }

  huecosLibres() {
    const huecos = this.capacidad - this.contactos.length;
    document.write(`<br>La agenda tiene ${huecos} huecos libres.`);
  }
}

// Crear una agenda con capacidad 10
const miAgenda = new Agenda();


// Menú de opciones
let opcion;
do {
  opcion = prompt(`
    Elija una opción:
    1. Añadir contacto
    2. Buscar contacto
    3. Eliminar contacto
    4. Listar contactos
    5. Mostrar huecos libres
    0. Salir
  `);

switch (opcion) {
    case '1':
      const nombre = prompt('Introduce el nombre del contacto:');
      const telefono = prompt('Introduce el teléfono del contacto:');
      miAgenda.aniadirContacto(new Contacto(nombre, telefono));
      break;

    case '2':
      const nombreBuscar = prompt('Introduce el nombre del contacto a buscar:');
      miAgenda.buscarContacto(nombreBuscar);
      break;

    case '3':
      const nombreEliminar = prompt('Introduce el nombre del contacto a eliminar:');
      miAgenda.eliminarContacto(new Contacto(nombreEliminar));
      break;

    case '4':
      miAgenda.listarContactos();
      break;

    case '5':
      miAgenda.huecosLibres();
      break;

    case '0':
      document.write('');
      break;

    default:
      document.write('Opción no válida.');
      break;
  }
} while (opcion !== '0');


/*function mostrarMenu() {
    const opcion = prompt(`
      Elija una opción:
      1. Añadir contacto
      2. Buscar contacto
      3. Eliminar contacto
      4. Listar contactos
      5. Mostrar huecos libres
      0. Salir
    `);
  
    switch (opcion) {
      case '1':
        const nombre = prompt('Introduce el nombre del contacto:');
        const telefono = prompt('Introduce el teléfono del contacto:');
        miAgenda.aniadirContacto(new Contacto(nombre, telefono));
        mostrarMenu();
        break;
  
      case '2':
        const nombreBuscar = prompt('Introduce el nombre del contacto a buscar:');
        miAgenda.buscarContacto(nombreBuscar);
        mostrarMenu();
        break;
  
      case '3':
        const nombreEliminar = prompt('Introduce el nombre del contacto a eliminar:');
        miAgenda.eliminarContacto(new Contacto(nombreEliminar));
        mostrarMenu();
        break;
  
      case '4':
        miAgenda.listarContactos();
        mostrarMenu();
        break;
  
      case '5':
        miAgenda.huecosLibres();
        mostrarMenu();
        break;
  
      case '0':
        document.write('');
        break;
  
      default:
        document.write('Opción no válida.');
        mostrarMenu();
        break;
    }
  }
  
  mostrarMenu()*/



  