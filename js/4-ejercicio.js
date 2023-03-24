/*Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.*/
class Producto {
    constructor(codigo, nombre, precio) {
      this.codigo = codigo;
      this.nombre = nombre;
      this.precio = precio;
    }
    
    imprimeDatos() {
      document.write("<br>Código: " + this.codigo);
      document.write("<br>Nombre: " + this.nombre);
      document.write("<br>Precio:" + this.precio);
    }
  }
  
  let productos = [
    new Producto("P001", "Camiseta", 20.99),
    new Producto("P002", "Pantalón", 39.99),
    new Producto("P003", "Zapatos", 79.99)
  ];

  for (let i = 0; i < productos.length; i++) {
    document.write("<br>Producto " + (i+1) + ":");
    productos[i].imprimeDatos();
  }