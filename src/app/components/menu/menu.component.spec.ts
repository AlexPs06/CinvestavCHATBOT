import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { HeaderComponent } from '../header/header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatButtonModule, MatToolbarModule, MatIconModule } from '@angular/material';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  const angularMaterial=[
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
  ]
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        angularMaterial,
        RouterTestingModule
      ],
      declarations: [ 
        MenuComponent,
        HeaderComponent 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
