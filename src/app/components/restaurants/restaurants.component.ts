import { Component, OnInit } from '@angular/core';
import { RestaurantsService, Restaurant } from '../../services/restaurants.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styles: []
})
export class RestaurantsComponent implements OnInit {

  restaurants:Restaurant[] = [];

  constructor( private _restaurantsService: RestaurantsService,
                private router:Router ) { }

  ngOnInit() {
    this.restaurants = this._restaurantsService.getRestaurants();
  }

  detallsRestaurant(id:number){
    this.router.navigate(['/restaurant',id]);
  }

}
