import { Injectable } from '@angular/core';

@Injectable()
export class OpinionsService {

  private opinions:Opinion[] = [
    {
      id: 1,
      user: "User 1",
      idRestaurant: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      rate: 8,
    },
    {
      id: 2,
      user: "User 2",
      idRestaurant: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      rate: 8,
    },
    {
      id: 3,
      user: "User 3",
      idRestaurant: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      rate: 8,
    },
    {
      id: 4,
      user: "User 4",
      idRestaurant: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      rate: 8,
      },
    {
      id: 5,
      user: "User 5",
      idRestaurant: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      rate: 8,
    }
  ];

  constructor() { }

  getOpinions(){
    /*let url = 'restaurants.json';
    return this.jsonp.get(url).map( res=> res.json());*/
    return this.opinions;
  }

}



export interface Opinion {
  id: number;
  user: string;
  idRestaurant: number;
  text: string;
  rate: number;
};
