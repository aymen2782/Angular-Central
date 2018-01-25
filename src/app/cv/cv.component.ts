import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  personnes : Personne[];
  constructor() { }

  ngOnInit() {
    this.personnes =[
      new Personne('sellaouti','aymen','as.jpg','Teacher'),
      new Personne('sellaouti2','aymen2','as.jpg','Teacher2')
      ]
  }

}
