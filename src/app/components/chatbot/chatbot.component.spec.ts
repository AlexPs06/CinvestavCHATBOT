import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotComponent } from './chatbot.component';
import { HeaderComponent } from '../header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule, MatButtonModule, MatToolbarModule, MatInputModule, MatIconModule } from '@angular/material';
import { User } from 'src/app/models/User.model';


const angularMaterial=[
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatInputModule,
  MatIconModule
]
describe('ChatbotComponent', () => {
  let component: ChatbotComponent;
  let fixture: ComponentFixture<ChatbotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        angularMaterial,
        FormsModule, 
        ReactiveFormsModule,
        RouterTestingModule
      ],
      declarations: [ 
        ChatbotComponent,
        HeaderComponent
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatbotComponent);
    component = fixture.componentInstance;
    component.user = new User("alex",12,"luis_pesar@hotmail.com","not","alumno","1") //Se crea un usuario de prueba para el testing 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
