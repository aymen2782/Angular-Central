import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from "../Model/Personne";

@Component({
  selector: 'app-cv-item',
  templateUrl: './cv-item.component.html',
  styleUrls: ['./cv-item.component.css']
})
export class CvItemComponent implements OnInit {

  @Input() personne : Personne;
  constructor() { }

  @Output() sendData = new EventEmitter();
  ngOnInit() {
  }

  sendPersonne(){
    console.log(this.personne.nom, 'selected');
    this.sendData.emit(
      {
        'selectedPersonne': this.personne
      }
    );
  }

}
