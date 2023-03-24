/*Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:



esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.*/



class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
      this.nombre = nombre;
      this.edad = edad;
      this.dni = dni;
      this.sexo = sexo;
      this.peso = peso;
      this.altura = altura;
      this.anioNacimiento = anioNacimiento;
    }
  
    mostrarGeneracion() {
      let generacion;
      if (this.anioNacimiento >= 1997 && this.anioNacimiento <= 2012) {
        generacion = "Generación Z";
        document.write("Esta persona pertenece a la " + generacion + ", caracterizada por haber nacido en la era de la tecnología y las redes sociales.");
      } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1996) {
        generacion = "Generación Y (Millennials)";
        document.write("Esta persona pertenece a la " + generacion + ", caracterizada por haber crecido con la tecnología, la globalización y la crisis económica.");
      } else if (this.anioNacimiento >= 1965 && this.anioNacimiento <= 1980) {
        generacion = "Generación X";
        document.write("Esta persona pertenece a la " + generacion + ", caracterizada por haber vivido cambios sociales, tecnológicos y económicos importantes.");
      } else if (this.anioNacimiento >= 1946 && this.anioNacimiento <= 1964) {
        generacion = "Baby Boomers";
        document.write("Esta persona pertenece a los " + generacion + ", caracterizados por haber nacido después de la Segunda Guerra Mundial y haber sido una generación de cambio social y cultural.");
      } else if (this.anioNacimiento < 1946) {
        document.write("Esta persona pertenece a la generación Silenciosa, caracterizada por ser una generación que vivió los efectos de la guerra y la posguerra.");
      } else {
        document.write("No se pudo identificar a qué generación pertenece esta persona.");
      }
    }
  
    esMayorDeEdad() {
      if (this.edad >= 18) {
        return "Esta persona es mayor de edad.";
      } else {
        return "Esta persona es menor de edad.";
      }
    }
  
    mostrarDatos() {
      document.write("<br>Nombre: " + this.nombre);
      document.write("<br>Edad: " + this.edad);
      document.write("<br>DNI: " + this.dni);
      document.write("<br>Sexo: " + this.sexo);
      document.write("<br>Peso: " + this.peso);
      document.write("<br>Altura: " + this.altura);
      document.write("<br>Año de nacimiento: " + this.anioNacimiento);
    }
  
    generaDNI() {
      this.dni = Math.floor(Math.random() * (99999999 - 10000000) + 10000000);
    }
  }

  let persona1 = new Persona("Ana", 25, 12345678, "M", 60, 170, 1996);


persona1.generaDNI()
persona1.mostrarGeneracion(); // muestra "Esta persona pertenece a la Generación Y (Millennials), caracterizada por haber crecido

persona1.mostrarDatos();
