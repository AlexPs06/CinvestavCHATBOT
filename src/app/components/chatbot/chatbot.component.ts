import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ChatbotService } from 'src/app/services/chatbot/chatbot.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User.model';
import { Message } from 'src/app/models/Message.model';
import { MatDialog, MatDatepickerInputEvent } from '@angular/material';
import { AddFilesComponent } from 'src/app/dialogs/add-files/add-files.component';


import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
const moment = _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})

export class ChatbotComponent implements OnInit {

  date = new FormControl(moment());
  formChat:FormGroup;
  array_messages: Message[]=[];
  currentUser:String ="";
  user:User = JSON.parse(localStorage.getItem("user"))

  constructor(
    private formbuilder : FormBuilder,
    private chabtot: ChatbotService,
    public dialog : MatDialog
  ) {
    this.formChat = this.formbuilder.group({
      message : [''],
    })
   }

  ngOnInit() {
    this.currentUser=this.user.id
    
  }
  sendMessage(){
    let value = this.formChat.get("message").value
    let mensajeUsuario:Message = new Message (value, this.user.id, this.user.username) ;
    this.chabtot.converse(mensajeUsuario.content).then(responseBot=>{
      if("¿Qué día sera el examen?"==responseBot.content){
       console.log("el dia") 
        responseBot.dateCondition=true;
      }
      this.array_messages.push(mensajeUsuario)    
      this.array_messages.push(responseBot)    
      

    })
    this.formChat.reset();
  }

  sendMessageBot(data){
    let value = data
    let mensajeUsuario:Message = new Message (value, this.user.id, this.user.username) ;
    this.chabtot.converse(mensajeUsuario.content).then(responseBot=>{
      if("¿Qué día sera el examen?"==responseBot.content){
       console.log("el dia") 
        responseBot.dateCondition=true;
      }
      this.array_messages.push(mensajeUsuario)    
      this.array_messages.push(responseBot)    
      

    })
    this.formChat.reset();
  }

  openDialogAddFile(){
    const dialogRef = this.dialog.open(AddFilesComponent);
    dialogRef.afterClosed().subscribe(response=>{
         
      if (response) {
        console.log(response);
        let value = "Se ha añadido un nuevo material con la siguiente URL: "+response.url + " para la clase del "+response.grado+' "'+response.grupo+
        '"para la materia de ' +response.materia +" con la siguiente descripcion: "+response.descripcion
        let mesageBot:Message = new Message (value, "bot", "bot");
        this.array_messages.push(mesageBot) 
      }      
    })
  }
  addEvent(data: Message, event: MatDatepickerInputEvent<Date>) {
    // this.events.push(`${type}: ${event.value}`);
    console.log("evento date picker")
    data.dateActivate=true
    let temp:string =`${event.value}`
    let dias = temp.split(" ")[0]
    let mes:string = temp.split(" ")[1].toString()
    let dia = temp.split(" ")[2]
    let año = temp.split(" ")[3]
    
    switch(mes){
      case "Jan": {
        mes="Enero"
        break;
      }
      case "Feb": {
        mes="Febrero"
        break;
      }
      case "Mar": {
        mes="Marzo"
        break;
      }
      case "Apr": {
        mes="Abril"
        break;
      }
      case "May": {
        mes="Mayo"
        break;
      }
      case "Jun": {
        mes="Junio"
        break;
      }
      case "Jul": {
        mes="Julio"
        break;
      }
      case "Aug": {
        mes="Agosto"
        break;
      }
      case "Sep": {
        mes="Septiembre"
        break;
      }
      case "Oct": {
        mes="Octubre"
        
        break;
      }
      case "Nov": {
        mes="Noviembre"
        break;
      }
      case "Dec": {
        mes="Diciembre"
        break;
      }
      default:
        break;
    }
    let value = mes+" "+dia+ " del "+ año;
    // let mesageBot:Message = new Message (value, "bot", "bot");
    // this.array_messages.push(mesageBot) 
    this.sendMessageBot(value)
  }
}

