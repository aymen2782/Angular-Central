import { Component, OnInit } from '@angular/core';
import {componentFactoryName} from "@angular/compiler";

@Component({
  selector: 'app-divcolor',
  templateUrl: './divcolor.component.html',
  styleUrls: ['./divcolor.component.css']
})
export class DivcolorComponent implements OnInit {

  compteur : number;
  private color: string;
  private defaultColor: string;
  constructor() {
  }

  ngOnInit() {
    this.defaultColor = 'blue';
    this.color = this.defaultColor;
    this.compteur = 0;
  }
  changeColor(couleur) {
    console.log(couleur);
    this.color = couleur;
  }
  reset() {
   this.color = this.defaultColor;
  }

  traiterFils(event){
    this.compteur+=event.increment;
  }

}
