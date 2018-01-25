import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-compo1',
  templateUrl: './compo1.component.html',
  styleUrls: ['./compo1.component.css']
})
export class Compo1Component implements OnInit {

  dataToFather: number = 1;
  @Output() dataSent = new EventEmitter();
  @Input() pereColor: string;
  constructor() { }

  ngOnInit() {
  }

  sendData(){
    console.log('in sendData');
    this.dataSent.emit(
      {
        increment : this.dataToFather
    }
    );
  }

}
