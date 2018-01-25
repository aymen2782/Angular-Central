import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-card',
  templateUrl: './cv-card.component.html',
  styleUrls: ['./cv-card.component.css']
})
export class CvCardComponent implements OnInit {

  name: string;
  firstname: string;
  job: string;
  image: string;
  constructor() { }

  ngOnInit() {
    this.name = "Sellaouti";
    this.firstname = "Aymen";
    this.job = "Computer Science Associate Professor";
    this.image= "rotating_card_profile2.png";
  }

}
