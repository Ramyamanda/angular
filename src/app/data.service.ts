import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  serviceMsg = 'this is service';
  constructor(private _http: HttpClient) {}
  pstdata: any;
 

  url = 'http://localhost:5555/data';
  users(data: any) {
    this._http.get('https://reqres.in/api/posts').subscribe((resp) => {
      console.log('1' + resp);
    });
    debugger;
    this._http.post('https://reqres.in/api/posts', data).subscribe((resp) => {
      console.log(resp);
    });
  }

  sendData(data: any): Observable<any> {
    debugger
    
    return this._http.post<any>(this.url, data);
  }
  
}
