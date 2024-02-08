import { Component, OnInit } from '@angular/core';
import { peliculas } from './peliculas.mock';

@Component({
  selector: 'azw-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent implements OnInit {

  abecedario: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  listaoriginal: any[] = [...peliculas];
  librosFiltrados: any[]= [...peliculas];

  constructor() { }

  ngOnInit(): void {
  }

  filtrar(texto: Event){
    const valor = (<HTMLInputElement>texto.target).value.toLowerCase();
    const filtrado = this.listaoriginal.filter(element => element.titulo.toLowerCase().includes(valor) || element.autora.toLowerCase().includes(valor));
    this.librosFiltrados = [...filtrado];
  }

  filtrarLetra(texto: string){
    const valor = texto.toLowerCase();
    const filtrado = this.listaoriginal.filter(element => element.titulo.at(0).toLowerCase() === valor);
    this.librosFiltrados = [...filtrado];
  }

}
