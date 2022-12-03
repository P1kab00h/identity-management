import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LDAP_USERS } from '../model/ldap-mock-data';
import { UserLdap } from '../model/user-ldap';

@Component({
  selector: 'app-ldap-list',
  templateUrl: './ldap-list.component.html',
  styleUrls: ['./ldap-list.component.scss']
})
export class LdapListComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['nomComplet', 'mail', 'employeNumero'];
  dataSource = new MatTableDataSource<UserLdap>([]);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor() {}

  ngOnInit(): void {
    console.log('Values on ngOnInit() :');
    this.dataSource.paginator = this.paginator;
    console.log('Mat Paginator : ', this.paginator);
    this.getUsers();
  }
  ngAfterViewInit(): void {
    console.log('Values on ngAfterViewInit() :');

    console.log('Mat Paginator : ', this.paginator);
  }

  private getUsers(): void {
    this.dataSource.data = LDAP_USERS;
  }
}
