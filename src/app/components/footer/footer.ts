import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {
  nombreEmpresa = 'Elegance Muebles';
  // Año actual obtenido dinámicamente desde TypeScript
  anioActual: number = new Date().getFullYear();

  // Arreglo con Facebook, Instagram, TikTok y Pinterest, incluyendo nombre, icono y enlace
  redesSociales = [
    {
      nombre: 'Facebook',
      icono: 'fa-brands fa-facebook',
      enlace: 'https://www.facebook.com'
    },
    {
      nombre: 'Instagram',
      icono: 'fa-brands fa-instagram',
      enlace: 'https://www.instagram.com'
    },
    {
      nombre: 'TikTok',
      icono: 'fa-brands fa-tiktok',
      enlace: 'https://www.tiktok.com'
    },
    {
      nombre: 'Pinterest',
      icono: 'fa-brands fa-pinterest',
      enlace: 'https://www.pinterest.com'
    }
  ];
}
