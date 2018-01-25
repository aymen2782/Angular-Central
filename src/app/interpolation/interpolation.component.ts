import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  private nom: string ;
  private prenom: string ;
  private adresse: string ;
  constructor() {
  }

  ngOnInit() {
    this.nom = 'sellaouti';
    this.prenom = 'aymen';
    this.adresse = 'chez moi';
  }

}
