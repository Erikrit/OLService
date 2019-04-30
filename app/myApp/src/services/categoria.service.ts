import { Injectable } from '@angular/core';
import { Categoria } from 'src/model/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private categorias : Categoria;
  constructor() { }

  getCategoria(){
    return this.categorias;
  }

  setCategoria(cat :Categoria){
    this.categorias = cat;

  }
}
