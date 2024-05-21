import { Routes } from '@angular/router';
import { CreateCelularComponent } from './components/create-celular/create-celular.component';
import { MostrarCelularesComponent } from './components/mostrar-celulares/mostrar-celulares.component';

export const routes: Routes = [
    {
        path: '',
        component: MostrarCelularesComponent,
    },
    {
        path: 'crear-celular',
        component: CreateCelularComponent,
    },
];
