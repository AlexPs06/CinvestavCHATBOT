import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  formChat:FormGroup;
  array_messages: Message[] = [];
  currentUser = 2;
  constructor(
    private formbuilder : FormBuilder,
  ) {
    this.formChat = this.formbuilder.group({
      message : [''],
    })
   }

  ngOnInit() {
    let mensajePrueba:Message ;
    let mensajePrueba2:Message ;
    mensajePrueba={mensaje: "soy bot",  idUser: "1"}
    mensajePrueba2={mensaje: "soy usuario",  idUser: "2"}
    for (let index = 0; index < 10; index++) {
      this.array_messages.push(mensajePrueba)
      this.array_messages.push(mensajePrueba2)
      
    }
  }
  sendMessage(){
    let value: string = this.formChat.get("message").value
    let mensaje:Message ;
    mensaje={mensaje: value,  idUser: "2"}

    this.array_messages.push(mensaje)
    this.formChat.reset();
    // message.value=""
  }

}
export class Message {
  mensaje: string
  idUser: string
}
