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

<<<<<<< HEAD
  constructor( private _rs: RestaurantsService,
                private router:Router ) { }

  ngOnInit() {
    this.restaurants = this._rs.getRestaurants();
    /*this._rs.getRestaurants().subscribe(data=>{
      this.restaurants = data;
    });*/
=======
  constructor( private _restaurantsService: RestaurantsService,
                private router:Router ) { }

  ngOnInit() {
    this.restaurants = this._restaurantsService.getRestaurants();
>>>>>>> 07c0ad2e99a872ed034f20939e187626e20e4fb8
  }

  detallsRestaurant(id:number){
    this.router.navigate(['/restaurant',id]);
  }

}
