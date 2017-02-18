import {Component, OnInit} from '@angular/core';
import {ModifierService} from "../modifier.service";
import {UsersService} from "../users.service";
import {User} from "./user";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  providers: [UsersService]
})
export class InfoComponent implements OnInit {

  constructor(public usersService: UsersService, public modifierService: ModifierService) {
  }
  char:string;
  users:User[];
  level: number = 0;

  selectedUser:User;

  pickUser(name:string){
    for(var x=0; x<this.users.length; x++){
      if(this.users[x].character_name === name){
        this.selectedUser =  this.users[x];
        this.calculate(this.selectedUser.info.experience);
      }
    }
  }

  calculate(exp:number) {
    var tiers = [0, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000, 120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000];
    for (var x = 0; x < tiers.length; x++) {
      if (exp < tiers[x]) {
        this.level = 0;
        return x;
      }
    }
    this.level = 20;
    this.modifierService.setLvlMod(this.level);
  }

  ngOnInit() {
    this.usersService.getUsers().then((users:User[]) => {
      console.log(users[0]);
      this.users = users.map((user) => {
        user.info.level =  this.calculate(user.info.experience);
        return user;
      });
    });

  }
}
