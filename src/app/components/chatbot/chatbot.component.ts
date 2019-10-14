import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ChatbotService } from 'src/app/services/chatbot/chatbot.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User.model';
import { Message } from 'src/app/models/Message.model';
import { MatDialog } from '@angular/material';
import { AddFilesComponent } from 'src/app/dialogs/add-files/add-files.component';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
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
      this.array_messages.push(mensajeUsuario)    
      console.log(responseBot)
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

}

