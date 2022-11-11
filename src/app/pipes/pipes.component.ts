import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

name="angular"
name2="ANGULAR"
salary="67000"
person= {
  name:"tinku",
  age:20,
  salary:"68000"
}
dob=new Date();
num="0.93"




  constructor() { }

  ngOnInit(): void {
  }

}
