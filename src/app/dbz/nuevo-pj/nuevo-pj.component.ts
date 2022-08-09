import { Component, EventEmitter, Input, Output  } from '@angular/core';
import { Personajes } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-nuevo-pj',
  templateUrl: './nuevo-pj.component.html'
})
export class NuevoPjComponent  {

  @Input() nuevoPj: Personajes = {
    nombre: "",
    poder : 0
  }

  constructor( private dbzService: DbzService){

  }
  //@Output() unNuevoPj: EventEmitter<Personajes>  = new EventEmitter();


  agregar(){
    if(this.nuevoPj.nombre.trim().length === 0){return;}
    
    //this.unNuevoPj.emit(this.nuevoPj)
    this.dbzService.agregarPersonaje(this.nuevoPj);
    this.nuevoPj = {
      nombre: "",
      poder : 0
    }
  }
  
}
