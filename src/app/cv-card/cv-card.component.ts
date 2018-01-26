import {Component, Input, OnInit} from '@angular/core';
import {Personne} from "../Model/Personne";

@Component({
  selector: 'app-cv-card',
  templateUrl: './cv-card.component.html',
  styleUrls: ['./cv-card.component.css']
})
export class CvCardComponent implements OnInit {

  @Input() personne: Personne;
  constructor() { }

  ngOnInit() {

  }

}
