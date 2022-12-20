import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LdapDetailComponent } from '../ldap-detail/ldap-detail.component';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-ldap-edit',
  templateUrl: '../ldap-detail/ldap-detail.component.html',
  styleUrls: ['../ldap-detail/ldap-detail.component.scss']
})
export class LdapAddComponent extends LdapDetailComponent implements OnInit {
  constructor(private usersService: UsersService,
              fb: FormBuilder,
              router: Router,) {
  super(true, fb, router);
}

ngOnInit(): void {
    super.ngOnInit();
}

validateForm(): void {
  console.log('LdapAddComponent - validateForm');
}
}
