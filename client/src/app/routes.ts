import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { DispositivosComponent} from './dispositivos/dispositivos.component'


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: HomeComponent}, 
  {path:'dispositivos', component: DispositivosComponent},
  { path: '**', redirectTo: 'home' }
];