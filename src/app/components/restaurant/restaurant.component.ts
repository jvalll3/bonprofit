import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { RestaurantsService, Restaurant } from '../../services/restaurants.service';
import { OpinionsService, Opinion } from '../../services/opinions.service';

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

  opinions:Opinion[] = [];

  constructor( private activatedRoute: ActivatedRoute,
    private _rs:RestaurantsService,
    private _rso:OpinionsService,
    private router:Router,
    private _location: Location ) {
    this.activatedRoute.params.subscribe( parametros=>{
      this.restaurant = _rs.getRestaurant(parametros['id']-1);
    });
    this.opinions = this._rso.getOpinions();
  }

  ngOnInit() {

  }

  goToOpinionForm(id:number){
    this.router.navigate(['/valorar',id]);
  }

  goBack(){
    this.router.navigate(['/restaurants']);
  }

}
