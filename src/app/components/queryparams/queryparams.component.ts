import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-queryparams',
  templateUrl: './queryparams.component.html',
  styleUrls: ['./queryparams.component.scss']
})
export class QueryparamsComponent implements OnInit {
  activatedRout: any;
  id: any;

  constructor(public router:Router, activatedrout: ActivatedRoute) { }


  ngOnInit(): void {

    this.activatedRout.quaryparamMap.subscribe((paramsData:any) => {
      console.log('query params in dashboard',paramsData)
      if(paramsData && paramsData.params && paramsData.params.userId)
      this.id=paramsData.params.id
     
    })
  }

  navigateToPeople(){
    this.router.navigate(['/people'])
  }


 
  
 

}
