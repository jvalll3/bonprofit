import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';


const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'buscar', component: BuscarComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'restaurant/:id', component: RestaurantComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
