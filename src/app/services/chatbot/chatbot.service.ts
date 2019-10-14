import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment"
import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Message } from 'src/app/models/Message.model';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User.model';
@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  readonly token = environment.dialogflow.cinvestavChatbot;
  readonly tokenProfesor = environment.dialogflow.cinvestavChatbotProfesor;
  client;
  conversation = new BehaviorSubject<Message[]>([]);

  constructor() {
    let user:User= JSON.parse(localStorage.getItem("user"))
    if(user.type=="Profesor"){
      this.client = new ApiAiClient({ accessToken: this.tokenProfesor });
    }
    if(user.type=="Alumno"){

      this.client = new ApiAiClient({ accessToken: this.token });
    }
  }
   converse(msg: String) {
    return this.client.textRequest(msg)
               .then(res => {
                  const speech = res.result.fulfillment.speech;
                  const botMessage = new Message(speech, 'bot','bot' );
                  return botMessage
               });
  }

  talk(){
    this.client.textRequest("hola").then(response=>{
      console.log(response.result.fulfillment.speech);
    })

  }

  // Adds message to source
  update(msg: Message) {
    return this.conversation.next([msg]);
  }
}
