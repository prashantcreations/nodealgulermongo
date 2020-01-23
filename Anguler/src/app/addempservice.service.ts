import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AddempserviceService {

  constructor(private http: HttpClient) { }

  postEmpData(data): Observable<JSON> {
    console.log('service ' + data);
    console.log('in obesrable ');
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': 'http://localhost:3001'
      })
    };
    return this.http.post<Stri>('http://localhost:3001/routes/addUser', data, httpOptions);
  }




}
