import { Component } from '@angular/core';
import { Personajes } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  

  nuevo: Personajes = {
    nombre: "Mestro Roshi",
    poder : 10000
  }

  constructor() {

  }

}
