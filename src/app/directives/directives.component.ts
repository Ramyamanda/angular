import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {


  Name='vinnu'
  Departament="IT"
  Role="Developer"
  ttt:any
  
  showhead=false;
  hide=true;
  
  ImgUrl='https://www.w3schools.com/w3images/avatar2.png'
  show(){
    this.Role="Engineer"
    console.log(this.Role)
  
  }
  show2(){
    console.log(this.ttt)
    this.ttt="ramya"
  }
  color="green"
  data=[                                                                             
    {
      name:'vinnu',
      age:'21',
      email:'vinnu@gmail.com'
    },
    {
      name:'john',
      age:'23',
      email:'john@gmail.com'
    },
    {
      name:'princy',
      age:'21',
      email:'princy@gmail.com'
    },
    {
      name:'tinku',
      age:'25',
      email:'tinku@gmail.com'
    }
    ]
    constructor() { }

    ngOnInit(): void {
    }
}
