import { Component } from '@angular/core';
import { Celular } from '../../models/Celular';
import { CelularService } from '../../service/celular.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-celular',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-celular.component.html',
  styleUrl: './create-celular.component.css'
})
export class CreateCelularComponent {
  celular: Celular;

  constructor(private celularService: CelularService) {
    this.celular = new Celular();
  }

  insertarCelular() {

    console.log(this.celular);

    this.celularService.insertarCelular(this.celular).then(
      (response) => {
        window.location.href = '/';
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
