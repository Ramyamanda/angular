import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from './data.service';

export class Data {
  userId: any;
  id: any;
  title: any;
  body: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{


  title = 'Post API Call in Angular';

  public form = new FormGroup({
    userId: new FormControl(),
    id: new FormControl(),
    title: new FormControl(),
    body: new FormControl(),
  });

  
  datas: any;
  onSubmit() {
    debugger;
    let data = new Data();

    data.userId = this.form.get('userId')?.value;
    data.id = this.form.get('id')?.value;
    data.title = this.form.get('title')?.value;
    data.body = this.form.get('body')?.value;

    

    this.userData.sendData(data).subscribe((data) => {
      console.log(data);
    });
  }

  getUserFormData(data: any) {
    console.warn(data);
  }

  msg: any;
  fromParent = 'this parent messege';
  ReceiveData(event: any) {
    this.msg = event;
  }

  constructor(private http: HttpClient, private userData: DataService) {}
  data: any;
  users: any;

  async getdata() {
    await this.http.get('https://dummyjson.com/users').subscribe((res) => {
      debugger;
      this.data = res;
      this.users = this.data.users;
    });
  }

  ngOnInit(): void {}
}
