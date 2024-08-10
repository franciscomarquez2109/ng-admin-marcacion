import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  url: string = 'http://localhost:8080/';
  constructor(
    private http:HttpClient
  ) { }

  getLocation():Promise<any>{
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp =>{
        resolve({lng:resp.coords.longitude,lat:resp.coords.latitude});
      },err =>{reject(err)})
    })
  }
  saveMarking(id_employee:number,location:string): Observable<any>{
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let body = {
      id_employee: id_employee,
      location: location
    };
    console.log(body)

    return this.http.post(this.url + 'marking/save', body, { headers: headers });
  }
}
