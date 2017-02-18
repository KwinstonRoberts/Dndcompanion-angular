import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-save-hits',
  templateUrl: './save-hits.component.html',
  styleUrls: ['./save-hits.component.css']
})
export class SaveHitsComponent implements OnInit {

  successes:number;
  failures:number;


  constructor() { }

  ngOnInit() {
  }

}
