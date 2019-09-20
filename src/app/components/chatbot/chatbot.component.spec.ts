import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotComponent } from './chatbot.component';
import { HeaderComponent } from '../header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule, MatButtonModule, MatToolbarModule, MatInputModule, MatIconModule } from '@angular/material';


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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
