import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-valorar',
  templateUrl: './valorar.component.html',
  styles: []
})
export class ValorarComponent implements OnInit {

  idRestaurant:number = 1;

  constructor(private activatedRoute: ActivatedRoute,
    private router:Router) {
      this.activatedRoute.params.subscribe( parametros=>{
        this.idRestaurant = parametros['id'];
      })
  }

  ngOnInit() {

  }
  returnToRestaurant(){
    this.router.navigate(['/restaurant',this.idRestaurant]);
  }

}
