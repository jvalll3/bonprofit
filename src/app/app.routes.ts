import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { LoginComponent } from './login/login.component';
import { ValorarComponent } from './components/valorar/valorar.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { ReservarComponent } from './components/reservar/reservar.component';

const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'buscar', component: BuscarComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'restaurant/:id', component: RestaurantComponent },
  { path: 'login', component: LoginComponent },
  { path: 'valorar/:id', component: ValorarComponent},
  { path: 'mapa/:id', component: MapaComponent},
  { path: 'reservar/:id', component: ReservarComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
