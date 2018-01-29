import { Injectable } from '@angular/core';
import {Personne} from "./Model/Personne";

@Injectable()
export class EmbaucheService {

  embauches : Personne[];
  constructor() {
    this.embauches = [];
  }

  embaucher(personne : Personne){

    this.embauches.push(personne);
    console.log('in embauches service : liste',this.embauches);
  }

  getEmbauches(){
    return this.embauches;
  }

}
