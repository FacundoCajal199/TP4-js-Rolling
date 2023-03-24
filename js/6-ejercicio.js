/*Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.*/

class Libro {
    constructor(isbn, titulo, autor, numPaginas){
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.numPaginas = numPaginas;
    }
    //metodos get
getIsbn(){
    return this.isbn;
}
getTitulo(){
    return this.titulo;
}
getAutor(){
    return this.autor;
}
getNumPaginas(){
    return this.numPaginas;
}
// Métodos set
setIsbn(isbn) {
    this.isbn = isbn;
  }

  setTitulo(titulo) {
    this.titulo = titulo;
  }

  setAutor(autor) {
    this.autor = autor;
  }

  setNumPaginas(numPaginas) {
    this.numPaginas = numPaginas;
  }

  // Método mostrarLibro
  mostrarLibro() {
    document.write(`<br>El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene ${this.numPaginas} páginas <br>`);
  }

}


// Crear objetos Libro
const libro1 = new Libro("978-8408069106", "Harry Potter y la Piedra Filosofal", "J.K. Rowling", 256);
const libro2 = new Libro("978-8497930887", "El Código Da Vinci", "Dan Brown", 576);

// Mostrar información de los libros
libro1.mostrarLibro();
libro2.mostrarLibro();
