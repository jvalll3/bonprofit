import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styles: []
})
export class ReservarComponent implements OnInit {

  idRestaurant:number = 1;
  mostrarXarxesSocials = false;

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

  reservar(){
    this.mostrarXarxesSocials = true;
  }

}
