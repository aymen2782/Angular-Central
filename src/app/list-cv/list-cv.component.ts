import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from "../Model/Personne";

@Component({
  selector: 'app-list-cv',
  templateUrl: './list-cv.component.html',
  styleUrls: ['./list-cv.component.css']
})
export class ListCvComponent implements OnInit {

  @Input() personnes: Personne[];
  constructor() { }

  @Output() sendSelectedPersonne = new EventEmitter();
  ngOnInit() {
  }

  senDataFromList(event){
    console.log('in SendData');
    console.log('recieved personne',event.selectedPersonne);
      this.sendSelectedPersonne.emit(
        {
          selectedPersonne : event.selectedPersonne
        }
      )
  }
}
