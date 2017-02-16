import { Injectable } from '@angular/core';
import {Info} from "./info/info";
import { Http, } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllUsers(): Promise<Info[]> {
    return this.http.get('/api/user')
      .toPromise()
      .then(response => response.json() as Info[])
      .catch(this.handleError);
  }

   handleError (error: any) {
    console.log(error);
  }
}

