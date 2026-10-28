import { Component, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';

declare const M: any;

@Component({
  selector: 'app-header',
  standalone: false,
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header implements AfterViewInit, OnDestroy {
  slides = [
    {
      id: 1,
      imagen: 'img/muebleria.webp',
      titulo: 'Bienvenidos a Elegance Muebles',
      descripcion: 'La mueblería más linda y moderna de la ciudad',
      activo: true
    },
    {
      id: 2,
      imagen: 'img/muebleria2.jpeg',
      titulo: 'Conoce las mejores ofertas',
      descripcion: 'Tenemos las colecciones más increíbles para tu sala y comedor',
      activo: true
    },
    {
      id: 3,
      imagen: 'img/muebleria3.jpg',
      titulo: 'Diseños exclusivos y confort',
      descripcion: 'A un súper precio con acabados artesanales de primera calidad',
      activo: true
    },
    {
      id: 4,
      imagen: 'img/muebleria4.jpg',
      titulo: 'Calidad y durabilidad garantizada',
      descripcion: 'Muebles diseñados para durar toda la vida con maderas finas',
      activo: true
    }
  ];

  private slider: any;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const elem = this.el.nativeElement.querySelector('.slider');
    if (elem) {
      this.slider = M.Slider.init(elem, {
        indicators: true,
        height: 500,
        interval: 5000
      });
    }
  }

  ngOnDestroy(): void {
    this.slider?.destroy();
  }
}
