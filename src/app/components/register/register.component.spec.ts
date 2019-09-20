import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatInputModule, MatRadioModule, MatCardModule, MatButtonModule, MatToolbarModule, MatIconModule} from '@angular/material';
import { APIService } from 'src/services/api.service';
const angularMaterial=[
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatInputModule,
  MatIconModule,
  MatRadioModule

]

import { RegisterComponent } from './register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        angularMaterial,
        FormsModule, 
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule
        
      ],
      declarations: [
        RegisterComponent,
        HeaderComponent
            
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
