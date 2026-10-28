import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  nombreEmpresa = 'Elegance Muebles';
  eslogan = 'Muebles de calidad para tu hogar';

  menu = [
    {
      nombre: 'Inicio',
      icono: 'fa-solid fa-house',
      route: '#inicio'
    },
    {
      nombre: 'Historia',
      icono: 'fa-solid fa-book-open',
      route: '#historia'
    },
    {
      nombre: 'Catalogo',
      icono: 'fa-solid fa-couch',
      route: '#catalogo'
    },
    {
      nombre: 'Promociones',
      icono: 'fa-solid fa-tags',
      route: '#promociones'
    },
    {
      nombre: 'Contacto',
      icono: 'fa-solid fa-envelope',
      route: '#contacto'
    }
  ];
}
