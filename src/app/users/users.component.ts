import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(public rputer: Router) { }

  ngOnInit(): void {
  }

  navigateToRouting(){
this.rputer.navigate(['/routing', 123456789])
  }

}
