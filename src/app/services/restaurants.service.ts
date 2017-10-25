import { Injectable } from '@angular/core';
import { Jsonp } from "@angular/http";
import 'rxjs/Rx'; // Map

@Injectable()
export class RestaurantsService {

  private restaurants:Restaurant[] = [
    {
      id: 1,
      nom: "Restaurant A"
    },
    {
      id: 2,
      nom: "Restaurant B"
    },
    {
      id: 3,
      nom: "Restaurant C"
    },
    {
      id: 4,
      nom: "Restaurant D"
    },
    {
      id: 5,
      nom: "Restaurant E"
    },
    {
      id: 6,
      nom: "Restaurant F"
    },
    {
      id: 7,
      nom: "Restaurant G"
    },
    {
      id: 8,
      nom: "Restaurant H"
    },
    {
      id: 9,
      nom: "Restaurant I"
    },
    {
      id: 10,
      nom: "Restaurant J"
    },
    {
      id: 11,
      nom: "Restaurant K"
    }
  ];

  constructor( private jsonp:Jsonp ) {
    console.log("Service ready!")
  }

  getRestaurants(){
    /*let url = 'restaurants.json';
    return this.jsonp.get(url).map( res=> res.json());*/
    return this.restaurants;
  }

  getRestaurant(id:number){
    //return this.restaurants[0].map(res=>res.json());
    return this.restaurants[id];
  }

}

export interface Restaurant {
  id: number;
  nom: string;
};
