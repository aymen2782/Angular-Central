import { Component, OnInit } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Error} from "tslint/lib/error";

@Component({
  selector: 'app-httptest',
  templateUrl: './httptest.component.html',
  styleUrls: ['./httptest.component.css']
})
export class HttptestComponent implements OnInit {

  constructor(private http:Http) { }

  posts : Object [];
  ngOnInit() {
  }

  testPostApi(){
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(
      (response: Response) => {
        this.posts = response.json();
        console.log(response);
      },
      (error: Error)=> {
        console.log(error);
      }
    )
  }
}
