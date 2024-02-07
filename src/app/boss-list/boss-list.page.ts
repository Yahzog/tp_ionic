import { Component, OnInit } from '@angular/core';
import {BossService} from "../boss.service";
import {Bosses} from "../models/boss.model";

@Component({
  selector: 'app-boss-list',
  templateUrl: './boss-list.page.html',
  styleUrls: ['./boss-list.page.scss'],
})
export class BossListPage implements OnInit {
  bosses! : Array<Bosses>;
  constructor( private Boss: BossService) { }

  ngOnInit() {
    this.Boss.getAll().subscribe((data:any) => {
      console.log(data);
      this.bosses = data;
    })
  }

}
