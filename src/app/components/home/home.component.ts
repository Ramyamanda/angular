import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  name = 'ramya'
config:any
  constructor() { }


  ngOnInit(): void {
    console.log("birth of components")
  }
 
 
  ngOnDestroy(): void {
    console.log("death of components")
  }
}

