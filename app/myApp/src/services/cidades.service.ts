import { Injectable } from '@angular/core';
import { Estado } from '../model/estado';

@Injectable({
  providedIn: 'root'
})
export class CidadesService {
 private estado: Estado;
  constructor() { }

  getDestn(){
    
    return this.estado;
  }
  setDestin(estado:Estado){
    this.estado = estado;
 
  }
}
