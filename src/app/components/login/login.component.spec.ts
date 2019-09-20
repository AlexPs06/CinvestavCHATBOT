import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material';

const angularMaterial=[
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatInputModule,
  MatIconModule
]


import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        angularMaterial,
        FormsModule, 
        ReactiveFormsModule,
        RouterTestingModule
      ],
      declarations: [ 
        LoginComponent,
        HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
