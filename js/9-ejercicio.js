/*Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado. */

class Animal{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }

emitirSonido(){
   console.log("emitir sonido  generico")
}

}

class Perro extends Animal{
    constructor(nombre,edad){
        super (nombre,edad);
    }

    emitirSonido(){
        console.log("guau guau!")
    }
}

class Gato extends Animal{
    constructor(nombre,edad){
        super(nombre,edad);
    }
    emitirSonido(){
        console.log("miau miaua!")
    }
}

//objetos
const miPerro = new Perro ("supercan",5)
const miGato = new Gato ("garfiel",3)


// Llamar a los metodos
miPerro.emitirSonido();
miGato.emitirSonido();