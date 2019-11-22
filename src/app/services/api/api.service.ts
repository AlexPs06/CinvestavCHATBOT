import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { API, API2 } from 'src/app/app-config'
import { User } from 'src/app/models/User.model';
import { Subject } from 'src/app/models/Subject.model';
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
      return this.http.post(`${this.api}login/`, params, httpOptions);
    }
    getUsersNotActivated(){
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          
        })
      }
      return this.http.get(`${this.api}users/`, httpOptions);
    }
    getUsersActivatedNotInLesson(){
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          
        })
      }
      return this.http.get(`${this.api}users/`, httpOptions);
    }

    getUsersInLesson(params){
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          
        }),
        params:params
      }
      return this.http.get(`${this.api}lessonsGroupGrade/`, httpOptions);
    }
    getSubjectsGrade(params){
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          
        }),
        params:params
      }
      return this.http.get(`${this.api}subjectsGrade/`, httpOptions);
    }
    getUsersNotLesson(){
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          
        }),
      }
      return this.http.get(`${this.api}usersNotLesson/`, httpOptions);
    }

    updateUser(user:User){
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          
        })
      }
      return this.http.put(`${this.api}users/${user.id}`,user ,httpOptions);
    }

    updateSubject(subject:Subject){
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          
        })
      }
      return this.http.put(`${this.api}subjects/${subject.id}`,subject ,httpOptions);
    }

    addSubject(subject:Subject){
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          
        })
      }
      return this.http.post(`${this.api}subjects/`,subject ,httpOptions);
    }
    
    deleteLessonIdUser(id){
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          
        })
      }
      return this.http.delete(`${this.api}lessonsIdUser/${id}`,httpOptions);
    }

}
