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

  constructor( private _rs:RestaurantsService ) {
    //this.restaurant = _rs.getRestaurant(this.restaurant.id);
  }

  ngOnInit() {

  }

}
