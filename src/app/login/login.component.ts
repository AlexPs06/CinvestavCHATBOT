import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

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
    private router: Router


  ) { 
    this.formLogin = this.formbuilder.group({
      username : [''],
      password : ['']
    })
  }

  ngOnInit() {
  }
  comprobarLogin(){
    
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

    console.log(this.formLogin.value.username+"--"+this.formLogin.value.password)
    
  }
  register(){
    
  }
}
