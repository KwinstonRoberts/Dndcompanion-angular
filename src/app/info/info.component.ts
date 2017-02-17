import {Component, OnInit} from '@angular/core';
import {ModifierService} from "../modifier.service";
import {UsersService} from "../users.service";
import {User} from "./user";
import {Char} from "./chars";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  providers: [UsersService]
})
export class InfoComponent implements OnInit {



  constructor(public usersService: UsersService, public modifierService: ModifierService) {
  }

  public chars:Char[];
  public users:User[];
  level: number = 0;

  calculate() {
    var tiers = [0, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000, 120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000];
    for (var x = 0; x < tiers.length; x++) {
      if (this.users[0].info.experience < tiers[x]) {
        this.level = x;
        return;
      }
    }
    this.level = 20;
    this.modifierService.setLvlMod(this.level);
  }

  ngOnInit() {
    this.usersService.getChar().then((chars:Char[])=>{
      this.chars = chars.map((char) => {
        return char;
      });
    });
    this.usersService.getUser("Gustfinger").then((users:User[])=>{
      this.users = users.map((user) =>{
        user.info = {
          class: this.users[0].info.class,
          background: this.users[0].info.background,
          level: 0,
          race: this.users[0].info.race,
          alignment: this.users[0].info.alignment,
          experience: this.users[0].info.experience
        }
        return user
      });
    });
    console.log("users:"+ this.users[0].info.alignment);
  }
}
