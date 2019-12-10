import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { File } from 'src/app/models/File.model';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-files',
  templateUrl: './add-files.component.html',
  styleUrls: ['./add-files.component.css']
})
export class AddFilesComponent implements OnInit {

  /**
   * form con los datos del archivo
   */
  formFile:FormGroup;

  /**
   * variable que indica si ya se envio la respuesta
   */
  enviado:Boolean;

  /**
   * Variable que tiene los datos a guardar del archivo
   * @param url la url de donde se ubica el archivo
   * @param descripcion la descripcion del archivo
   * @param grado el grado para los alumnos del archivo
   * @param grupo el grupo para los alumnos del archivo
   * @param materia la materia a la que pertenece el archivo
   */
  data={
    url:"",
    descripcion:"",
    grado:"",
    grupo: "",
    materia:"Materia",
  };
  /**
   * 
   * @param formBuilder Contructor base de un form
   * @param dialogRef variable para hacer la referencia al dialogo 
   * @param firebase variable de la conexion con firebase
   * @param message mensaje a recibir de la ventana que invoca al dialog
   */
  constructor(
    public formBuilder: FormBuilder,
    public dialogRef : MatDialogRef<AddFilesComponent>,
    public firebase: FirebaseService,
    @Inject(MAT_DIALOG_DATA) public message:string
  ) { 
    this.formFile = this.formBuilder.group({
      url:['', [Validators.required]],
      descripcion:['', [Validators.required]],
      grado:['', [Validators.required]],
      grupo: ['', [Validators.required]],
      materia:['Materia', [Validators.required]],

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

  /**
   * Funcion para enviar el archivo
   */
  sendFile(){
    this.data=this.formFile.value;
    let response:Boolean = this.firebase.addFiles(this.data);
    
  }
}
