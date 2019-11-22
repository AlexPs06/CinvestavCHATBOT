import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Grade, Group } from 'src/app/components/users-lessons/users-lessons.component';
import { User } from 'src/app/models/User.model';
import { MatTableDataSource, MatPaginator, MatSort, MAT_DIALOG_DATA } from '@angular/material';
import { APIService } from 'src/app/services/api/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { group } from '@angular/animations';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {


  formStudent:FormGroup;

  selection = new SelectionModel<any>(true, []);

  arrayStudents: Array<User>;
  estudiantes: Boolean =false;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns: string[] = ['select','id', 'name','grade', 'group'];
  dataSource: MatTableDataSource<User>;
 
  grades:Grade[] = [
    {value: '1', viewValue:"1°"},
    {value: '2', viewValue:"2°"},
    {value: '3', viewValue:"3°"},
    {value: '4', viewValue:"4°"},
    {value: '5', viewValue:"5°"},
    {value: '6', viewValue:"6°"}
  ];
  groups:Group[] = [
    {value: 'A', viewValue:"A"},
    {value: 'B', viewValue:"B"},
    {value: 'C', viewValue:"C"},
    {value: 'D', viewValue:"D"},
    {value: 'E', viewValue:"E"},
    {value: 'F', viewValue:"F"}
  ];
  constructor(
    private api: APIService,
    public formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public  data:any, 
  ) {
    this.formStudent = this.formBuilder.group({
      grade:['', [Validators.required]],
      group: ['', [Validators.required]],

    });
   }

  ngOnInit() {
    if (this.data.group) {
      this.formStudent.get('group').setValue(this.data.group)
      
    }
    if(this.data.grade){
      this.formStudent.get('grade').setValue(this.data.grade)

    }


    if (this.formStudent.valid) {
      
      
      this.api.getUsersNotLesson().subscribe(response=>{
        this.estudiantes=true;

        this.arrayStudents=response as Array<User>

          this.dataSource = new MatTableDataSource(this.arrayStudents);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
  
      });
    }

  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  check(){
    console.log("entre"); 
    console.log(this.formStudent.value);
  
  }
  
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
  async removeSelectedRows() {
    this.selection.selected.forEach(item => {
      let index: number = this.arrayStudents.findIndex(d => d === item);
      console.log(this.arrayStudents.findIndex(d => d === item));
      let temp:any = this.arrayStudents.find(d => d === item)
      console.log(temp)
      
      this.api.deleteLessonIdUser(temp.id_user).subscribe(response=>{
        this.arrayStudents.splice(index,1)
        this.dataSource = new MatTableDataSource<User>(this.arrayStudents);
      })

    });
    this.selection = new SelectionModel<User>(true, []);
  }
}
