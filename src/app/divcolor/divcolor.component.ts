import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-divcolor',
  templateUrl: './divcolor.component.html',
  styleUrls: ['./divcolor.component.css']
})
export class DivcolorComponent implements OnInit {

  private color: string;
  private defaultColor: string;
  constructor() {
  }

  ngOnInit() {
    this.defaultColor = 'blue';
    this.color = this.defaultColor;
  }
  changeColor(couleur) {
    console.log(couleur);
    this.color = couleur;
  }
  reset() {
   this.color = this.defaultColor;
  }

}
