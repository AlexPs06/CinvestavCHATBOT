import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  existUser:boolean=false;
  constructor(
    private router: Router,

  ) { }

  ngOnInit() {
    if(localStorage.getItem("user")!=undefined)
      this.existUser=true;
    else
      this.existUser=false;
  }
  exitAcount(){
    localStorage.clear()
    this.router.navigateByUrl("");
  }

  register(){
    this.router.navigateByUrl("Register")
  }
  login(){
    this.router.navigateByUrl("Login")
  }
}
