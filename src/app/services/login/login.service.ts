import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url: string = 'http://localhost:8080/';
  constructor(
    private http: HttpClient
  ) { }

  login(userName: string, password: string): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let body = {
      name: userName,
      password: password
    };

    return this.http.post(this.url + 'user', body, { headers: headers });
  }

  getIdUserStorage(): number{
    let item:string = localStorage.getItem('dataUser') || '{}';
    let dataUser = JSON.parse(item)
    return dataUser.id;
  }
}

