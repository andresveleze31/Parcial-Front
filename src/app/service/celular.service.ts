import { Injectable } from '@angular/core';
import axios from 'axios';
import { Celular } from '../models/Celular';

@Injectable({
  providedIn: 'root'
})
export class CelularService {

  constructor() { }

  insertarCelular(celular: Celular): Promise<Celular> {
    return axios
      .post<Celular>(
        'http://localhost:8080/api/parcial/celular',
        celular
      )
      .then((response) => response.data);
  }

  async getCelulares(): Promise<Celular[]> {
    return await axios
      .get<Celular[]>('http://localhost:8080/api/parcial/celular')
      .then((response) => response.data);
  }
}
