
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { DataService } from 'src/app/data.service';


export class Data {
  userId: any;
  id: any;
  title: any;
  body: any;
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(private _http:HttpClient,private userData: DataService) { }

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
    this._http.post('https://reqres.in/api/posts', data).subscribe((resp) => {
      debugger
      console.log(resp);
    });
  }

  ngOnInit(): void {
  }

}
