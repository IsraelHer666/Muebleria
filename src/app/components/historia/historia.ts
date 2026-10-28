import { Component } from '@angular/core';

@Component({
  selector: 'app-historia',
  standalone: false,
  styleUrl: './historia.css',
  templateUrl: './historia.html',
})
export class Historia {
  // Arreglo de cuatro acontecimientos de la empresa con año, título y descripción
  acontecimientos = [
    {
      anio: 2010,
      titulo: 'fundacion del taller artesanal',
      descripcion: 'INICIAMOS COMO UN PEQUEÑO TALLER FAMILIAR EN EL CENTRO DE LA CIUDAD, FABRICANDO MUEBLES DE MADERA A MEDIDA.'
    },
    {
      anio: 2015,
      titulo: 'apertura de la primera tienda',
      descripcion: 'INAUGURAMOS NUESTRA PRIMERA SALA DE EXHIBICION, INCORPORANDO LINEAS MODERNAS DE SALAS Y COMEDORES.'
    },
    {
      anio: 2020,
      titulo: 'expansion y ventas digitales',
      descripcion: 'LANZAMOS NUESTRO CATALOGO EN LINEA PARA LLEVAR NUESTROS DISEÑOS A TODO EL PAIS CON ENVIOS SEGUROS.'
    },
    {
      anio: 2024,
      titulo: 'linea sustentable e innovacion',
      descripcion: 'DESARROLLAMOS NUESTRA NUEVA COLECCION CON MADERAS CERTIFICADAS Y PROCESOS DE FABRICACION ECO-AMIGABLES.'
    }
  ];

  // Identificador del año más reciente
  anioMasReciente: number = 2024;
}
