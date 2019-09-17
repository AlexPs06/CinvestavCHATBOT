import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  typeMenu:String ="profesor" //existen dos tipos de menu alumno y profesor entre esos debe de cambiar la variable
  nameProfesor:String="Luis"
  constructor() { }

  ngOnInit() {
  }

}
