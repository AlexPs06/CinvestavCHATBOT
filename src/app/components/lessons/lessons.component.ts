import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/User.model';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { APIService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

  array: Array<User>;
  displayedColumns: string[] = ['id', 'name', 'activated', ];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(
    private api: APIService,
  ) {

  }

  ngOnInit() {
    
    this.api.getUsersNotActivated().subscribe(response=>{
      this.array=response as Array<User>
      console.log(this.array)
      console.log("users")
      this.dataSource = new MatTableDataSource(this.array);
      this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    });

    
  }
  changeActivated(activated:Boolean, user : User){
    user.activated=activated;
    this.api.updateUser(user).subscribe(response=>{
      console.log(response)
    })
  }
  changeType(type:String, user : User){
    
    user.type=type;
    this.api.updateUser(user).subscribe(response=>{
      console.log(response)
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
