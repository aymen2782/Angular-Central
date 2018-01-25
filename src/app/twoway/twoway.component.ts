import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway',
  templateUrl: './twoway.component.html',
  styleUrls: ['./twoway.component.css']
})
export class TwowayComponent implements OnInit {
  two: any = 'myInitValue 2';
  constructor() { }

  ngOnInit() {
  }
  duplicate() {
    this.two = this.two + ' ' + this.two;
  }

}
