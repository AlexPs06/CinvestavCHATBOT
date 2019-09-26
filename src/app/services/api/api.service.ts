import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { API, API2 } from 'src/app/app-config'
import { User } from 'src/app/models/User.model';
@Injectable({
  providedIn: 'root'
})
export class APIService {
  api: string = API
  api2: string = API2

  constructor(private http: HttpClient) { }

    register(params: User ):Observable<any>{
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          
        })
      }

      return this.http.post(`${this.api}users/`, params, httpOptions)
    }
    
    getHello():Observable<any>{
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          
        })
      }
      return this.http.get(`${this.api2}`,httpOptions)

    }
    login(params):Observable<any>{
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          
        })
      }
      return this.http.post(`${this.api}login/`, params, httpOptions); ;
    }
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
