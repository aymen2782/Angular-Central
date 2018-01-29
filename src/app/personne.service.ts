import { Injectable } from '@angular/core';
import {Personne} from "./Model/Personne";

@Injectable()
export class PersonneService {

  personnes : Personne[];
  constructor() {
    this.personnes =[
      new Personne('sellaouti','aymen','as.jpg','Teacher'),
      new Personne('sellaouti2','aymen2','as.jpg','Teacher2'),
      new Personne('sellaouti3','aymen3','as.jpg','Teacher3'),
      new Personne('sellaouti4','aymen4','as.jpg','Teacher4')
    ];
  }

  getPersonnes(){
    return this.personnes;
  }

  addPersonne(personne : Personne){
    this.personnes.push(personne);
    console.log(this.personnes);
  }
}
