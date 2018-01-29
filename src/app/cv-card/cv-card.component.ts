import {Component, Input, OnInit} from '@angular/core';
import {Personne} from "../Model/Personne";
import {EmbaucheService} from "../embauche.service";

@Component({
  selector: 'app-cv-card',
  templateUrl: './cv-card.component.html',
  styleUrls: ['./cv-card.component.css']
})
export class CvCardComponent implements OnInit {

  @Input() personne: Personne;
  constructor(private embaucheService:EmbaucheService) { }

  ngOnInit() {

  }

  embaucher(personne : Personne){
    console.log('in cv card embaucher');
    this.embaucheService.embaucher(personne);
  }

}
