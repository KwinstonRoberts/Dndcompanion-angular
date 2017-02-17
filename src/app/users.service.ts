import {Injectable, OnInit} from '@angular/core';
import {User} from "./info/user";
import {Chars} from "./info/chars";
import { Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  public users: User[];
  public charNames:Chars[] = [];
  public charName:string;

  setCharName(input:string){
    this.charName = input;
    this.setInfo();
    console.log(this.users);
  }

  setInfo(){
    this.SelectUser("Gustfinger").then((users: User[]) => {
      this.users = users.map((user) => {
        return user;
      });
    });
  }


  SelectUser(name:string): Promise<User[]> {
    return this.http.get('api/user/:'+name)
      .toPromise()
      .then(response => response.json() as User[])
      .catch(this.handleError);

  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }

}

