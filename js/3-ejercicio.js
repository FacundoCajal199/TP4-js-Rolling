/*3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área*/
class Rectangulo {
    constructor(ancho, alto) {
      this.ancho = ancho;
      this.alto = alto;
    }
    
    cambiarAncho(ancho) {
      this.ancho = ancho;
    }
    
    cambiarAlto(alto) {
      this.alto = alto;
    }
    
    obtenerAncho() {
      return this.ancho;
    }
    
    obtenerAlto() {
      return this.alto;
    }
    
    calcularArea() {
      return this.ancho * this.alto;
    }
    
    calcularPerimetro() {
      return 2 * (this.ancho + this.alto);
    }
    
    mostrarPropiedades() {
      document.write("<br>Ancho: " + this.ancho);
      document.write("<br>Alto: " + this.alto);
      document.write("<br>Área: " + this.calcularArea());
      document.write("<br>Perímetro: " + this.calcularPerimetro());
    }
  }

  let rectangulo = new Rectangulo(10, 5);

rectangulo.mostrarPropiedades(); // muestra Ancho: 10, Alto: 5, Área: 50, Perímetro: 30

rectangulo.cambiarAncho(7);
rectangulo.cambiarAlto(3);

rectangulo.mostrarPropiedades(); // muestra Ancho: 7, Alto: 3, Área: 21, Perímetro: 20