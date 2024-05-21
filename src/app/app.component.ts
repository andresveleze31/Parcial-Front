import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MostrarCelularesComponent } from './components/mostrar-celulares/mostrar-celulares.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MostrarCelularesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontparcial';
}
