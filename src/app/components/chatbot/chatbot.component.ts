import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ChatbotService } from 'src/app/services/chatbot/chatbot.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User.model';
import { Message } from 'src/app/models/Message.model';

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
    private chabtot: ChatbotService
  ) {
    this.formChat = this.formbuilder.group({
      message : [''],
    })
   }

  ngOnInit() {
    console.log(this.user.id)
    this.currentUser=this.user.id
    // let mensajePrueba:Message ;
    // let mensajePrueba2:Message ;
    // mensajePrueba={mensaje: "soy bot",  idUser: "1"}
    // mensajePrueba2={mensaje: "soy usuario",  idUser: "2"}
    // for (let index = 0; index < 10; index++) {
    //   this.array_messages.push(mensajePrueba)
    //   this.array_messages.push(mensajePrueba2)
    

    
    // }
  }
  sendMessage(){
    let value = this.formChat.get("message").value
    let mensaje:Message = new Message (value, this.user.id, this.user.username) ;
    this.chabtot.converse(mensaje.content).then(response=>{
      this.array_messages.push(mensaje)    
      console.log(response)
      this.array_messages.push(response)    

    })


    this.formChat.reset();
    // message.value=""
  }

}

