import { Component } from '@angular/core';
import { Celular } from '../../models/Celular';
import { CelularService } from '../../service/celular.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-mostrar-celulares',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mostrar-celulares.component.html',
  styleUrl: './mostrar-celulares.component.css'
})
export class MostrarCelularesComponent {
  celulares: Celular[] = [];

  constructor(private celularService: CelularService) {}

  ngOnInit(): void {
    this.cargarCelulares();
  }

  cargarCelulares() {
    this.celularService
      .getCelulares()
      .then((post) => {
        this.celulares = post;
        console.log(this.celulares);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  getFormattedDate(timestamp: number): string {
    const date = new Date(timestamp);
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

}
