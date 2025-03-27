import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MateriasComponent } from './pages/materias/materias.component';
import { MasBuscadasComponent } from './pages/mas-buscadas/mas-buscadas.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'materias', component: MateriasComponent }, // Cambiado a "materials"
    { path: 'mas-buscadas', component: MasBuscadasComponent }
  ];

export default routes;