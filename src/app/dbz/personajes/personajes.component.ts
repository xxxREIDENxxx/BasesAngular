import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {
  //@Input()  personajes: Personajes[] = [];

  get personajes() {
    return this.DbzService.personajes;
  }
  constructor (private DbzService: DbzService){
    
  }
}
