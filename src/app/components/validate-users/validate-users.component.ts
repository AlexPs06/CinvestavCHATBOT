import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { User } from 'src/app/models/User.model';
import { APIService } from 'src/app/services/api/api.service';

const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];


@Component({
  selector: 'app-validate-users',
  templateUrl: './validate-users.component.html',
  styleUrls: ['./validate-users.component.css']
})
export class ValidateUsersComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'email','activated', 'type'];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private api: APIService,
  ) {

  }

  ngOnInit() {
    let array: Array<User>;
    this.api.getUsersNotActivated().subscribe(response=>{
      array=response as Array<User>
      console.log(array)
      console.log("users")
      this.dataSource = new MatTableDataSource(array);
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
