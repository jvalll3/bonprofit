import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  buscar(){
    this.router.navigate(['/restaurants']);
  }

}
