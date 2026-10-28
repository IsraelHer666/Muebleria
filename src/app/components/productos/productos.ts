import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  standalone: false,
  styleUrl: './productos.css',
  templateUrl: './productos.html',
})
export class Productos {
  // Arreglo de al menos ocho productos con id, nombre, descripcion, precio, categoria, imagen, disponible y nuevo
  productos = [
    {
      id: 1,
      nombre: 'sala modular velvet gris',
      descripcion: 'Sala modular tapizada en terciopelo suave con estructura de madera de pino.',
      precio: 14500,
      categoria: 'Salas',
      imagen: 'img/muebleria.webp',
      disponible: true,
      nuevo: true
    },
    {
      id: 2,
      nombre: 'comedor nogal 6 sillas',
      descripcion: 'Mesa de comedor de madera sólida con 6 sillas tapizadas en lino beige.',
      precio: 18200,
      categoria: 'Comedores',
      imagen: 'img/muebleria2.jpeg',
      disponible: true,
      nuevo: false
    },
    {
      id: 3,
      nombre: 'cama king size tapizada',
      descripcion: 'Cabecera capitonada de gran formato con soporte ortopédico reforzado.',
      precio: 12900,
      categoria: 'Recámaras',
      imagen: 'img/muebleria3.jpg',
      disponible: false,
      nuevo: false
    },
    {
      id: 4,
      nombre: 'sillon ocasional mostaza',
      descripcion: 'Sillón individual estilo nórdico retro con patas en acabado roble claro.',
      precio: 4800,
      categoria: 'Sillones',
      imagen: 'img/muebleria4.jpg',
      disponible: true,
      nuevo: true
    },
    {
      id: 5,
      nombre: 'mesa de centro marmol blanco',
      descripcion: 'Elegante mesa de centro con cubierta de mármol y base de herrería negra.',
      precio: 3600,
      categoria: 'Mesas',
      imagen: 'img/muebleria.webp',
      disponible: true,
      nuevo: false
    },
    {
      id: 6,
      nombre: 'librero minimalista 5 niveles',
      descripcion: 'Librero vertical de estilo moderno acabado nogal con marcos metálicos.',
      precio: 6200,
      categoria: 'Estudios',
      imagen: 'img/muebleria2.jpeg',
      disponible: false,
      nuevo: false
    },
    {
      id: 7,
      nombre: 'credenza escandinava roble',
      descripcion: 'Aparador bufetero con puertas corredizas y amplios cajones organizadores.',
      precio: 8900,
      categoria: 'Almacenamiento',
      imagen: 'img/muebleria3.jpg',
      disponible: true,
      nuevo: true
    },
    {
      id: 8,
      nombre: 'escritorio ejecutivo madera',
      descripcion: 'Escritorio con pasacables integrado y cajonera con llave de seguridad.',
      precio: 7500,
      categoria: 'Oficina',
      imagen: 'img/muebleria4.jpg',
      disponible: true,
      nuevo: false
    }
  ];

  // Event binding para compra
  comprar(producto: any): void {
    alert(`Producto agregado al carrito: ${producto.nombre.toUpperCase()}`);
  }
}
