import {Injectable, OnInit} from '@angular/core';
import {User} from "./info/user";
import {Char} from "./info/chars";
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  public users: User[];
  public charNames:Char[] = [];
  public charName:string;


  getUsers(): Promise<User[]> {
   return this.http.get('api/user')
     .toPromise()
     .then(response => {response.json() as User[];})
     .catch(this.handleError);
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }

}

