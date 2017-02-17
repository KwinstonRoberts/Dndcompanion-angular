import {Injectable, OnInit} from '@angular/core';
import {User} from "./info/user";
import {Char} from "./info/chars";
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  public users: User[];
  public charNames:Char[] = [];
  public charName:string;

  setChar(input:string){
    this.charName = input;
  }

  getChar(){
   return this.http.get("api/character").map((res: Response) => res.json());
  }

  getUser(name:string){
    return this.http.get('api/user/'+name).map((res:Response) => res.json());
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }

}

