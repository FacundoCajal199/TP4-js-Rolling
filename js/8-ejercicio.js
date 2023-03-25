/* Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".*/

class Persona {
    constructor(nombre,edad,profesion){
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }
saludar(){
    console.log(`Hola mi nombre es ${this.nombre} tengo ${this.edad} años y soy ${this.profesion}`)
}
despedirse(){
   console.log("Adiós, hasta luego!")
    }
}

    const Persona1 = new Persona ("Facundo",21,"ingeniero");
    const Persona2 = new Persona ("Rodrigo",23,"abogado");

    Persona1.saludar();
    Persona1.despedirse();

    Persona2.saludar();
    Persona2.despedirse();