import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {UserLdap} from "../model/user-ldap";
import {LDAP_USERS} from "../model/ldap-mock-data";
import {MatPaginator} from "@angular/material/paginator";
import {MatSlideToggleChange} from "@angular/material/slide-toggle";
import {UsersService} from "../service/users.service";

@Component({
  selector: 'app-ldap-list',
  templateUrl: './ldap-list.component.html',
  styleUrls: ['./ldap-list.component.scss'],
})

export class LdapListComponent implements OnInit {

  displayedColumns: string[] = ['nomComplet', 'mail', 'employeNumero'];
  //dataSource = new MatTableDataSource<UserLdap>(LDAP_USERS);
  dataSource = new MatTableDataSource<UserLdap>([]);
  //unactivateSelected = false;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor() {}
  //constructor() {private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    //this.dataSource.filterPredicate = (data: UserLdap, filter: string) => this.filterPredicate(data, filter);
    this.getUsers();
  }

  /*filterPredicate(data, filter): boolean {
    return !filter || data.nomComplet.toLowerCase().startsWith(filter);
  }

  applyFilter($event: KeyboardEvent): void {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
*/
  private getUsers(): void {
    /*this.usersService.getUsers().subscribe(
      users => {
        if (this.unactivateSelected) {
          this.dataSource.data = users.filter(user => user.active === false);
        } else {
          this.dataSource.data = users;
        }
      }
    );*/
    this.dataSource.data = LDAP_USERS;
    //if (this.unactivateSelected) {
    //  this.dataSource.data = this.dataSource.data.filter(user=>user.active===false);
    //}
  }
/*
  unactiveChanged($event: MatSlideToggleChange): void {
    this.unactiveSelected = $event.checked;
    this.getUsers();
  }
*/
}
