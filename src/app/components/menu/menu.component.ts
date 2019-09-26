import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  typeMenu:String ="alumno" //existen dos tipos de menu alumno y profesor entre esos debe de cambiar la variable
  name:String="Luis"
  user:User;
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.user= JSON.parse(localStorage.getItem("user"))
    this.typeMenu=this.user.type;
    this.name= this.user.username
    console.log(this.user)
    
  }

  goToChatbot(){
    this.router.navigateByUrl("Chatbot")
  }
}
