import { Injectable } from "@angular/core";
import { Personajes } from '../interfaces/dbz.interface';


@Injectable()
export class DbzService{

    private _personajes: Personajes[] = [
        {
          nombre: "Goku",
          poder : 15000
        },
        {
          nombre: "Vegeta",
          poder : 10000
        }
    ];

    get personajes(): Personajes[] {
        return [...this._personajes];
    }
    constructor(){
        console.log('servicio inicializado');
    }

    agregarPersonaje(personaje: Personajes){
        this._personajes.push( personaje );
    }
}