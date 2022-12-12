import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  Name='vinnu'
  Departament="IT"
  Role="Developer"
  ttt:any
  
  
  
  ImgUrl='https://www.w3schools.com/w3images/avatar2.png'
  show(){
    this.Role="Engineer"
    console.log(this.Role)
  
  }
  show2(){
    console.log(this.ttt)
    this.ttt="ramya"
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
