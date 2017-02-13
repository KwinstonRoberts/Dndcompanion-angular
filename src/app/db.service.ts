import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class DbService {

  constructor(private http: Http) { }

  public Create(): Observable<any> {
    return this.http.get("/api/user");
  }

}
