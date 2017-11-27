import { Injectable } from '@angular/core';
import { Jsonp } from "@angular/http";
import 'rxjs/Rx'; // Map

@Injectable()
export class RestaurantsService {

  private restaurants:Restaurant[] = [
    {
      id: 1,
      nom: "Restaurant A",
      poblacio: "Reus",
      cp: 43204,
      rate: 4,
    },
    {
      id: 2,
      nom: "Restaurant B",
      poblacio: "Reus",
      cp: 43204,
      rate: 3,
    },
    {
      id: 3,
      nom: "Restaurant C",
      poblacio: "Reus",
      cp: 43204,
      rate: 5,
    },
    {
      id: 4,
      nom: "Restaurant D",
      poblacio: "Reus",
      cp: 43204,
      rate: 1,
    },
    {
      id: 5,
      nom: "Restaurant E",
      poblacio: "Reus",
      cp: 43204,
      rate: 3,
    },
    {
      id: 6,
      nom: "Restaurant F",
      poblacio: "Reus",
      cp: 43204,
      rate: 4,
    },
    {
      id: 7,
      nom: "Restaurant G",
      poblacio: "Reus",
      cp: 43204,
      rate: 5,
    },
    {
      id: 8,
      nom: "Restaurant H",
      poblacio: "Reus",
      cp: 43204,
      rate: 4,
    },
    {
      id: 9,
      nom: "Restaurant I",
      poblacio: "Reus",
      cp: 43204,
      rate: 2,
    },
    {
      id: 10,
      nom: "Restaurant J",
      poblacio: "Reus",
      cp: 43204,
      rate: 2,
    },
    {
      id: 11,
      nom: "Restaurant K",
      poblacio: "Reus",
      cp: 43204,
      rate: 1,
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
  poblacio: string;
  cp: number;
  rate: number;
};
