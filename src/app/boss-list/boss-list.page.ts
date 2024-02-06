import { Component, OnInit } from '@angular/core';
import {BossService} from "../boss.service";

@Component({
  selector: 'app-boss-list',
  templateUrl: './boss-list.page.html',
  styleUrls: ['./boss-list.page.scss'],
})
export class BossListPage implements OnInit {
  bosses! : any;
  constructor( private Boss: BossService) { }

  ngOnInit() {
    this.Boss.getAll().subscribe((data:any) => {
      this.bosses = data;
    })
  }

}
