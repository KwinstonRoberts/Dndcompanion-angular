import { Injectable } from '@angular/core';
import {Info, } from "./info/info";
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllUsers(): Promise<Info[]> {
    console.log(this.http.get('/api/user').toPromise());
    return this.http.get('/api/user')
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }
}

