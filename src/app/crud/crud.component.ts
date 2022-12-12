import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  mobiles=[
    {
      user:"xyz",
      mobile: "xyz",
      price: 20000,
      Storage: 126,
      RAM:'8GB'
    },
    {
      user:"abc",
      mobile: "xyz",
      price: 18000,
      Storage: 64,
      RAM:'6GB'
    },
    {
      user:"yy",
      mobile: "xyz",
      price: 12000,
      Storage: 126,
      RAM:'4GB'

    }
  ]
  

  constructor(private _http:HttpClient) { }

  ngOnInit(): void {
  }
  Addmobiles(){
    this.mobiles

  }
  post(){
    let data=
      {
        user: "tinku",
        mobile: "iqoo",
        price: 24000,
        Storage: 126,
        RAM: "8GB"
      }
    this._http.post('http://localhost:3004/mobiles',data).subscribe(res=>console.log(res))
  }
  get(){
    this._http.get('http://localhost:3004/mobiles').subscribe(res=>console.log(res))
  }

}
