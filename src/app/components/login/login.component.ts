import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { APIService } from 'src/app/services/api/api.service';
import { User } from 'src/app/models/User.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin : FormGroup;
  submit=false;

  constructor(
    private formbuilder : FormBuilder,
    private router: Router,
    private api: APIService,
  ) { 
    this.formLogin = this.formbuilder.group({
      email : [''],
      password : ['']
    })
  }

  ngOnInit() {
    this.api.getHello().subscribe(response=>{
      console.log(response)
    })
  }
  comprobarLogin(){
    let login=this.formLogin.value;
    this.api.login(login).subscribe(response=>{
      console.log(response.token)
      let user:User =  response.user;
      localStorage.setItem("user", JSON.stringify(user))
      localStorage.setItem("token", response.token)
      this.router.navigateByUrl("Menu")
    },error =>{
      alert(error.error.message)
      console.log(error.error.message)
      console.log(error.error.status)
    })

  }
  sendLogin(){
    this.submit=true;
    if(this.formLogin.invalid){
      console.log("error contraseña o usuarion no validos")
     // this.changeSuccessMessage1()
      return;
    }

    this.comprobarLogin();
    this.submit=false;

    
  }
  register(){
    this.router.navigateByUrl("Register")
  }

 
}
