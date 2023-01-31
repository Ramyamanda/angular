import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.scss']
})
export class RoutingComponent implements OnInit {
  id:any

  constructor( public router: Router, public activatedRout : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRout.paramMap.subscribe((paramsData:any) => {
      this.id=paramsData.params.id
      console.log(this.id)
    })
  }

  navigateToUsers(){
    this.router.navigate(['/users'])

  }
  navigateToUserInfo(){
    this.router.navigate(['/userInfo'])

  }

  

}
