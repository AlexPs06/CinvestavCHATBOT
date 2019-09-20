import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APIService } from 'src/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  formRegister : FormGroup;
  submitted=false;
  rols: string[] = ['Profesor', 'Alumno'];
  constructor(
    private api: APIService,
    private formbuilder : FormBuilder,
    private router: Router


  ) { 
    this.formRegister = this.formbuilder.group({
      username : ['',Validators.required],
      lastNameFather : ['', Validators.required],
      lastNameMother : ['',Validators.required],
      yearsold:['',Validators.required],
      password : ['',Validators.required],
      rol: ['',Validators.required],
      email : ['',Validators.required],
      confirmPassword: ['',Validators.required],
    })
  }
  get f() { return this.formRegister.controls; }
  ngOnInit() {


    this.api.getHello().subscribe(response=>{
      console.log(response)
    })
  }
  comprobarLogin(){
    
    if (this.formRegister.get("rol").value=="Alumno") {
      
    }
    else if (this.formRegister.get("rol").value=="Profesor"){

      let profesor: Profesor;
      profesor={
        apellido_materno:this.formRegister.get("lastNameMother").value,
        apellido_paterno:this.formRegister.get("lastNameFather").value,
        contraseña:this.formRegister.get("password").value,
        correo: this.formRegister.get("email").value,
        edad: this.formRegister.get("yearsold").value,
        nombre:this.formRegister.get("username").value
      }
      this.api.registerProfesor(profesor).subscribe(response =>{
        console.log(response)
      }, error=>{
        console.log(error)
  
      })
    }
    
  }
  sendRegister(){
    let profesor: Profesor;
    profesor={
      apellido_materno:this.formRegister.get("lastNameMother").value,
      apellido_paterno:this.formRegister.get("lastNameFather").value,
      contraseña:this.formRegister.get("password").value,
      correo: this.formRegister.get("email").value,
      edad: this.formRegister.get("yearsold").value,
      nombre:this.formRegister.get("username").value
    }
    this.api.registerProfesor(profesor).subscribe(response =>{
      console.log(response)
    }, error=>{
      console.log(error)

    })
    // this.submitted=true;
    // if(this.formRegister.invalid){
    //   console.log(this.formRegister.value)
    //   console.log(this.formRegister.invalid)
    //   return;
    // }

    // this.comprobarLogin();
    // this.submitted=false;

    
  }
  Login(){
    this.router.navigateByUrl("Login")
  }

}
export class Profesor{
	nombre:String
	apellido_materno:String
	apellido_paterno:String
	edad:Number
	correo:String
	contraseña:String
}