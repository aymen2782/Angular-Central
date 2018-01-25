import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compo2',
  template: `
    <p>
      compo2 Works!
    </p>
  `,
  styles: [`
    p{
      color: blueviolet;
      background-color: darkred;
    }
  `]
})
export class Compo2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
