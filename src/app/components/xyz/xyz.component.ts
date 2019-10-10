import { Component, OnInit, Injector, Inject } from '@angular/core';
import { MatDialog} from "@angular/material";
import { AlertComponent } from '../alert/alert.component';
@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css']
})
export class XyzComponent implements OnInit {

  constructor(
    public dialog : MatDialog,
  ) { }

  openDialog():void{
    const dialogRef = this.dialog.open(AlertComponent);
    dialogRef.afterClosed().subscribe(response=>{
      console.log(response);
    })
  }

  ngOnInit() {
  }
  /**
   * funcion llamada name
   * @param params son los parametros de muestra 
   */
  name(params) {
    
  }

}
