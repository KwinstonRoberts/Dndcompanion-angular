import {Component, OnInit} from '@angular/core';
import {ModifierService} from "../modifier.service";
import {UsersService} from "../users.service";
import {User} from "./user";
import {Char} from "./chars";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  chars:Char[];
  users:User[];
  level: number = 0;

  constructor(public usersService: UsersService, public modifierService: ModifierService) {
  }
  user:any [] = [];

  calculate() {
    var tiers = [0, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000, 120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000];
    for (var x = 0; x < tiers.length; x++) {
      if (this.user[0].info.experience < tiers[x]) {
        this.level = x;
        return;
      }
    }
    this.level = 20;
    this.modifierService.setLvlMod(this.level);
  }

  ngOnInit() {
    this.usersService.getChar().subscribe((chars:Char[])=>{this.chars = chars});
    this.usersService.getUser("Gustfinger").subscribe((users:User[])=>{
      this.users = users;
      console.log("users:"+users);
    });
  }
}
