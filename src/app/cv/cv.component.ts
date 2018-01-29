import { Component, OnInit } from '@angular/core';
import {Personne} from "../Model/Personne";
import {PersonneService} from "../personne.service";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  showForm: Boolean;
  selectedPersonne : Personne;
  personnes : Personne[];
  constructor(private personneService:PersonneService) { }

  ngOnInit() {

    this.personnes = this.personneService.getPersonnes();
    this.showForm = false;

  }
  showPersonne(event){
    console.log('in showPersonne');
    console.log('Personne : ',event.selectedPersonne);
    this.selectedPersonne = event.selectedPersonne;
  }

  afficherFormulaire(){
    this.showForm = true;
  }

}
