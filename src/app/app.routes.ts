import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
=======

>>>>>>> 07c0ad2e99a872ed034f20939e187626e20e4fb8

const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'buscar', component: BuscarComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'restaurant/:id', component: RestaurantComponent },
<<<<<<< HEAD
  { path: 'login', component: LoginComponent },
=======
>>>>>>> 07c0ad2e99a872ed034f20939e187626e20e4fb8
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
