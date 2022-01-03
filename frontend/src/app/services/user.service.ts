import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  udata: any;
  

  constructor(private http: HttpClient) {}

  getUser(token: any){
    const headers = {'Authorization': token}
    return this.http.get<any>('http://localhost:3000/user/getuser',{headers})
    .pipe(map(data => {
      if (data) {
        this.udata = data;
        console.log(this.udata);
      }
      return this.udata;
    }));
  }

}
