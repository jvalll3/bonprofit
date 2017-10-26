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

  constructor( private activatedRoute: ActivatedRoute,
    private _rs:RestaurantsService ) {
    this.activatedRoute.params.subscribe( parametros=>{
      this.restaurant = _rs.getRestaurant(parametros['id']-1);
    })
  }

  ngOnInit() {

  }

}
