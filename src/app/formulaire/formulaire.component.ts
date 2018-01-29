import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {PersonneService} from "../personne.service";
import {Personne} from "../Model/Personne";

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  constructor(private personneService: PersonneService) { }

  ngOnInit() {
  }

  enregistrer(formulaire : NgForm){
     let personne = new Personne(formulaire.value.nom,formulaire.value.prenom,formulaire.value.image,formulaire.value.job);
     console.log(personne)
     this.personneService.addPersonne(personne);
  }

}
