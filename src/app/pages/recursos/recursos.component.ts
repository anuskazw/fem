import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'azw-recursos',
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.scss']
})
export class RecursosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegar(subpage: string){
    switch (subpage) {
      case 'libros': this.router.navigateByUrl('/libros'); break;
      case 'redes': this.router.navigateByUrl('/redes-sociales'); break;
      case 'peliculas': this.router.navigateByUrl('/peliculas-y-series'); break;
    }
  }

}
