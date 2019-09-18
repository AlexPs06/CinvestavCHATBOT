import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  formRegister : FormGroup;
  submit=false;
  rols: string[] = ['Profesor', 'Alumno'];
  constructor(
    private formbuilder : FormBuilder,
    private router: Router


  ) { 
    this.formRegister = this.formbuilder.group({
      username : [''],
      password : [''],
      rol: [''],
      email : [''],
      confirmPassword: [''],
    })
  }

  ngOnInit() {
  }
  comprobarLogin(){
    
  }
  sendRegister(){
    this.submit=true;
    if(this.formRegister.invalid){
      console.log("error contraseña o usuarion no validos")
     // this.changeSuccessMessage1()
      return;
    }

    this.comprobarLogin();
    this.submit=false;

    console.log(this.formRegister.value.username+"--"+this.formRegister.value.password)
    console.log(this.formRegister.value)
    
  }
  Login(){
    this.router.navigateByUrl("Login")
  }

}
