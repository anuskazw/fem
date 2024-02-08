import { Component, OnInit } from '@angular/core';
import { libros } from './libros.mock';

@Component({
  selector: 'azw-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss']
})
export class LibrosComponent implements OnInit {

  abecedario: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  listaoriginal: any[] = [...libros];
  librosFiltrados: any[]= [...libros];

  constructor() { }

  ngOnInit(): void {
  }

  filtrar(texto: Event){
    const valor = (<HTMLInputElement>texto.target).value.toLowerCase();
    console.log(valor);

    const filtrado = this.listaoriginal.filter(element => element.titulo.toLowerCase().includes(valor) || element.autora.toLowerCase().includes(valor));
    this.librosFiltrados = [...filtrado];
  }

}
