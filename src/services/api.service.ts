import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { API, API_P } from 'src/app/app-config'
@Injectable({
  providedIn: 'root'
})
export class APIService {
  api: string = API

  constructor(private http: HttpClient) { }

  // login(params: any): Observable<any> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json'
  //     })
  //   }
  //   return this.http.post(`${this.api}login/`, params, httpOptions)
  // }
 
  // editUnidades(params: any, id): Observable<any>{
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Authorization':'Token '+localStorage.getItem('token')
  //     })
  //   }

  //   return this.http.put(`${this.api}unidades/${id}`, params, httpOptions)
  // }

  // getEquipos(): Observable<any> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Authorization':'Token '+localStorage.getItem('token')
  //     })
  //   }
  //   return this.http.get(`${this.api}registro/`, httpOptions)
  // }

}
