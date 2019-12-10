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
  /**
   * @param formLogin form del llgin que tiene los atributos email y password
   */
  formLogin : FormGroup;

  /**
   * @param submit valida el form que este correcto
   */
  submit=false;


  /**
   * Constructor de la clase
   * @param formbuilder constructor clasico de un form
   * @param router varibale para navegar en las rutas
   * @param api variable que sirve para realizar las peticiones de la api de la base de datos
   */

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

  /**
   * Metodo que se ejecuta cuando se crea la vista ejecuta un comando de prueba 
   */
  ngOnInit() {
    localStorage.clear()
    this.api.getHello().subscribe(response=>{
      console.log(response)
    })
  }
  /**
   * Metodo que comprueba al usuario que va a iniciar sesion 
   */
  comprobarLogin(){
    let login=this.formLogin.value;
    this.api.login(login).subscribe(response=>{
      console.log(response.token)
      let user:User =  response.user;
      if(user.activated==true){
        localStorage.setItem("user", JSON.stringify(user))
        localStorage.setItem("token", response.token)
        this.router.navigateByUrl("Menu")
      }
      
    },error =>{
      alert(error.error.message)
      console.log(error.error.message)
      console.log(error.error.status)
    })

  }
  /**
   * Metodo que comprueba la validez del form del login y ejecuta comprobar login 
   */
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
  /**
   * Metodo para redirigir a la vista del register
   */
  register(){
    this.router.navigateByUrl("Register")
  }

 
}
