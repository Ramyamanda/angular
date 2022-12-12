import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  name="tinku"
  age="22"
  address="khammam"
  msg:any
  msg1:any

  constructor() { }
 
  ngOnInit(): void {
  }


}
