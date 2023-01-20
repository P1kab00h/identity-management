import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { LDAP_USERS } from '../model/ldap-mock-data';
import { UserLdap } from '../model/user-ldap';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // Liste des utilisateurs (mock file => ldap-mock-data.ts)
  users: UserLdap[] = LDAP_USERS; // ??? TODO : check if 'static' work
  static users: any;  // ??? à tester 
  private usersUrl = 'api/users';
  private httpOptions = new HttpHeaders({'Content-Type': 'application/json'});


  addUser(user: UserLdap): Observable<UserLdap> {
    // UsersService.users.push(user);
    // return of(user);
    return this.http.post<UserLdap>(this.usersUrl, user, {
      headers: this.httpOptions
    });
  }

  // updateUser(userToUpdate: UserLdap): Observable<UserLdap> {
  //   // check
  //   const user = UsersService.users.find( u => u.login === userToUpdate.login );
  //   if (user) {
  //     // Modif
  //     user.nom = userToUpdate.nom;
  //     user.prenom = userToUpdate.prenom;
  //     user.nomComplet = user.nom + ' ' + user.prenom;
  //     user.motDePasse = userToUpdate.motDePasse;

  //     return of(userToUpdate);
  //   }
  //   return throwError('Utilisateur non trouvé');
  // }

  getUsers(): Observable<UserLdap[]> {
     //return of(this.users);
    return this.http.get<UserLdap[]>(this.usersUrl);
  }

  getUser(id: number): Observable<UserLdap> {
    return this.http.get<UserLdap>(this.usersUrl + '/' + id);
  }

  updateUser(user: UserLdap, id: number): Observable<UserLdap> {
    return this.http.put<UserLdap>(this.usersUrl + '/' + id, user,  {
      headers: this.httpOptions
    });
  }

  deleteUser(id: number): Observable<UserLdap> {
    return this.http.delete<UserLdap>(this.usersUrl + '/' + id, {
      headers: this.httpOptions
    });
  }

  constructor(private http: HttpClient) { }
}
