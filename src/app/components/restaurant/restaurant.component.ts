import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RestaurantsService, Restaurant } from '../../services/restaurants.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styles: []
})
export class RestaurantComponent implements OnInit {

  restaurant:Restaurant = {
    id : 1,
    nom: "Restaurant A"
  }

<<<<<<< HEAD
  constructor( private activatedRoute: ActivatedRoute,
    private _rs:RestaurantsService ) {
    this.activatedRoute.params.subscribe( parametros=>{
      this.restaurant = _rs.getRestaurant(parametros['id']-1);
    })

=======
  constructor( private _rs:RestaurantsService ) {
    //this.restaurant = _rs.getRestaurant(this.restaurant.id);
>>>>>>> 07c0ad2e99a872ed034f20939e187626e20e4fb8
  }

  ngOnInit() {

  }

}
