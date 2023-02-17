import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  constructor( public router:Router) { }

  ngOnInit(): void {
  }

  navigateToQuaryparams(){

    this.router.navigate(['/quaryparams'] ,  {queryParams : {userId : 12345678, name: 'Ramya', Qualification:'MCA'}})

  }


}
