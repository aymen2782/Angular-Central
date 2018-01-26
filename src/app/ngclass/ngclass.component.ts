import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {

  allume: boolean;
  eteint: boolean;
  showMe: boolean;
  constructor() { }

  ngOnInit() {
    this.allume = true;
    this.eteint = false;
    this.showMe = true;
  }

  change(){
    if(this.eteint){
      this.eteint=false;
      this.allume=true;
    }else{
      this.eteint=true;
      this.allume=false;
    }
  }
  show() {
    (this.showMe)?this.showMe=false:this.showMe=true;
  }
}
