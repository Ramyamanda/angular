
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class APIComponent implements OnInit {
  config:  any;

  constructor(private http: HttpClient) { }

  listusers: any;
  getlistusers() {
    debugger
    this.http.get('https://reqres.in/api/users?page=2').subscribe((res) => {
      console.log(res);
      this.listusers = res;
    });
  }

  ngOnInit(): void {
    debugger
    this.getlistusers();
    this.config = {
      itemsPerPage: 3,
      currentPage: 1,
    };
  }

  pageChanged(event: number) {
    this.config.currentPage = event;
  }
 

}
