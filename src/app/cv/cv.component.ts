import { Component, OnInit } from '@angular/core';
import {Personne} from "../Model/Personne";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  selectedPersonne : Personne;
  personnes : Personne[];
  constructor() { }

  ngOnInit() {
    this.personnes =[
      new Personne('sellaouti','aymen','as.jpg','Teacher'),
      new Personne('sellaouti2','aymen2','as.jpg','Teacher2'),
      new Personne('sellaouti3','aymen3','as.jpg','Teacher3'),
      new Personne('sellaouti4','aymen4','as.jpg','Teacher4')
      ]
  }
  showPersonne(event){
    console.log('in showPersonne');
    console.log('Personne : ',event.selectedPersonne);
    this.selectedPersonne = event.selectedPersonne;
  }

}
