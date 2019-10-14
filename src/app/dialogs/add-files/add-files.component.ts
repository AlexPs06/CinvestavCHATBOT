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

  formFile:FormGroup;
  enviado:Boolean;
  data={
    url:"",
    descripcion:"",
    grado:"",
    grupo: "",
    materia:"Materia",
  };
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

  onClickNo():void{
    this.dialogRef.close()
  }
  ngOnInit() {
  }

  sendFile(){
    this.data=this.formFile.value;
    let response:Boolean = this.firebase.addFiles(this.data);
    
  }
}
