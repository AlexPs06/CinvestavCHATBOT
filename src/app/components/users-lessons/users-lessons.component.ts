import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { APIService } from 'src/app/services/api/api.service';
import { User } from 'src/app/models/User.model';
import { Subject } from 'src/app/models/Subject.model';
import { AddSubjectComponent } from 'src/app/dialogs/add-subject/add-subject.component';

export interface Grade{
  value: any,
  viewValue: any
}
export interface Group{
  value: any,
  viewValue: any
}

@Component({
  selector: 'app-users-lessons',
  templateUrl: './users-lessons.component.html',
  styleUrls: ['./users-lessons.component.css']
})
export class UsersLessonsComponent implements OnInit {
  array: Array<User>;
  arrayLessons: Array<Subject>;
  
  materias: Boolean =false;
  estudiantes: Boolean =false;
  
  

  displayedColumns: string[] = ['id', 'name','grade', 'group'];
  dataSource: MatTableDataSource<User>;

  displayedColumnsLessons: string[] = ['id', 'name','grade', 'deleted'];
  dataSourceLessons: MatTableDataSource<Subject>;




  gradeSelected:String
  groupSelected:String
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


  @ViewChildren(MatPaginator, ) paginator:QueryList<MatPaginator>;
  // @ViewChild(Subject, {static: true}) paginatorLesson: MatPaginator;
  @ViewChildren(MatSort)  sort:QueryList< MatSort>;
  // @ViewChild(MatSort, {static: true}) sortLesson: MatSort;

  constructor(
    private api: APIService,
    public dialog : MatDialog,
    
  ) {

  }
  ngOnInit() {    
  }
  searchStudents(){ 
    if (this.gradeSelected){
      let params={
        grade:this.gradeSelected
      }

      this.api.getSubjectsGrade(params).subscribe(response=>{
        this.materias=true
        this.arrayLessons=response as Array<Subject>
        console.log(this.arrayLessons)
        console.log("users")
        this.dataSourceLessons = new MatTableDataSource(this.arrayLessons);
        this.dataSourceLessons.paginator = this.paginator.first;
        this.dataSourceLessons.sort = this.sort.first;
      });
    }

    if (this.gradeSelected != null && this.groupSelected != null) {
      let params={
        "grade":this.gradeSelected,
	      "group":this.groupSelected
      }
      
      this.api.getUsersInLesson(params).subscribe(response=>{
        this.estudiantes=true;

        this.array=response as Array<User>

          this.dataSource = new MatTableDataSource(this.array);
          this.dataSource.paginator = this.paginator.last;
          this.dataSource.sort = this.sort.last;
  
      });
    }
  }
 

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  deleted(row:Subject){
    row.deleted=true;
    this.api.updateSubject(row).subscribe(response=>{
      console.log(response);
      let params={
        grade:this.gradeSelected
      }
  
      this.api.getSubjectsGrade(params).subscribe(response=>{
        this.materias=true
        this.arrayLessons=response as Array<any>
        console.log(this.arrayLessons)
        console.log("users")
        this.dataSourceLessons = new MatTableDataSource(this.arrayLessons);
        this.dataSourceLessons.paginator = this.paginator.first;
        this.dataSourceLessons.sort = this.sort.first;
      });
    })
    
  }
  applyFilterLesson(filterValue: string) {
    this.dataSourceLessons.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceLessons.paginator) {
      this.dataSourceLessons.paginator.firstPage();
    }
  }

  addSubject(){
    const dialogRef = this.dialog.open(AddSubjectComponent,{
      data: {
        grade: this.gradeSelected,
        group:this.groupSelected
      }
    });
    dialogRef.afterClosed().subscribe(response=>{
        console.log(response);
        if(response){
          let subject:Subject= new Subject(response.materia,response.grado, false, 1 );
          console.log(subject)
          this.api.addSubject(subject).subscribe(response=>{
            if(response){
              let params={
                grade:this.gradeSelected
              }
          
              this.api.getSubjectsGrade(params).subscribe(response=>{
                this.materias=true
                this.arrayLessons=response as Array<any>
                this.dataSourceLessons = new MatTableDataSource(this.arrayLessons);
                this.dataSourceLessons.paginator = this.paginator.first;
                this.dataSourceLessons.sort = this.sort.first;
              });
            }
          })


          
        } 
           
    })
  }
}
