import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddFilesComponent } from '../add-files/add-files.component';
import { Grade, Group } from 'src/app/components/users-lessons/users-lessons.component';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {

 /**
  * Form con los datos del archivo a subir
  */
  formFile:FormGroup;

  /**
   * Variable que comprueba que ya se envio
   */
  enviado:Boolean;


  
  /**
   *  Propiedad que sirve para tener el grado al que pertenecera el archivo 
   * @param value es el valor que tendra como tal la seleccion 
   * @param viewValue es el valor que que se muestra para la seleccion 
   * 
   */
  grades:Grade[] = [
    {value: '1', viewValue:"1°"},
    {value: '2', viewValue:"2°"},
    {value: '3', viewValue:"3°"},
    {value: '4', viewValue:"4°"},
    {value: '5', viewValue:"5°"},
    {value: '6', viewValue:"6°"}
  ];

  /**
   * Propiedad que indica el grupo al que pertenece el archivo
   * @param value es el valor que tendra como tal la seleccion 
   * @param viewValue es el valor que que se muestra para la seleccion 
   * 
   */
  groups:Group[] = [
    {value: 'A', viewValue:"A"},
    {value: 'B', viewValue:"B"},
    {value: 'C', viewValue:"C"},
    {value: 'D', viewValue:"D"},
    {value: 'E', viewValue:"E"},
    {value: 'F', viewValue:"F"}
  ];

  /**
   * 
   * @param formBuilder Constructor clasico de un form 
   * @param dialogRef Referencia para tener acceso al dialog
   * @param data información recibida del componente que invoco al dialog 
   */
  constructor(
    public formBuilder: FormBuilder,
    public dialogRef : MatDialogRef<AddSubjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) { 
    this.formFile = this.formBuilder.group({
      grado:[data.grade, [Validators.required]],
      grupo: [data.group, [Validators.required]],
      materia:['', [Validators.required]],

    });

  }


  /**
   * Funcion para cerrar el dialog
   */
  onClickNo():void{
    this.dialogRef.close()
  }
  ngOnInit() {
  }

}
