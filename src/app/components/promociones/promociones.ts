import { Component } from '@angular/core';

@Component({
  selector: 'app-promociones',
  standalone: false,
  styleUrl: './promociones.css',
  templateUrl: './promociones.html',
})
export class Promociones {
  // Variable booleana para alternar el filtro
  soloVigentes: boolean = true;

  // Arreglo de al menos tres promociones con titulo, descripcion, descuento, vigente e imagen
  promociones = [
    {
      titulo: 'gran venta de salas esquineras',
      descripcion: 'Aprovecha 25% de descuento directo en todas las salas esquineras y modulares.',
      descuento: 25,
      vigente: true,
      imagen: 'img/muebleria.webp'
    },
    {
      titulo: 'combo comedor familiar de lujo',
      descripcion: 'En la compra de cualquier comedor recibe 2 sillas adicionales sin costo extra.',
      descuento: 15,
      vigente: true,
      imagen: 'img/muebleria2.jpeg'
    },
    {
      titulo: 'remate especial de invierno',
      descripcion: 'Últimas piezas de dormitorios y cómodas con precios de liquidación total.',
      descuento: 40,
      vigente: false,
      imagen: 'img/muebleria3.jpg'
    },
    {
      titulo: 'semana de dormitorios y recamaras',
      descripcion: 'Renueva tu recámara completa con financiamiento a meses sin intereses.',
      descuento: 20,
      vigente: true,
      imagen: 'img/muebleria4.jpg'
    }
  ];

  // Alternar entre todas las promociones y solo vigentes usando (click)
  alternarFiltro(): void {
    this.soloVigentes = !this.soloVigentes;
  }
}
