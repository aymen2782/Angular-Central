import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  inputText: string;
  constructor() { }

  ngOnInit() {
  }
  changeMessage(newVal) {
    this.inputText = newVal;
  }

}
