import {Injectable} from '@angular/core';
import {User} from "./info/user";
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  public users: User[];

  getUsers(): Promise<User[]> {
   return this.http.get('/api/user')
     .toPromise()
     .then(response => response.json().data as User[])
     .catch(this.handleError);
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }
}

