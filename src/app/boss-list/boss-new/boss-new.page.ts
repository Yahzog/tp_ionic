import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ToastController} from "@ionic/angular";
import {Bosses} from "../../models/boss.model";
import {BossService} from "../../boss.service";

@Component({
  selector: 'app-boss-new',
  templateUrl: './boss-new.page.html',
  styleUrls: ['./boss-new.page.scss'],
})
export class BossNewPage implements OnInit {
  public boss!: Bosses;

  constructor(
    private Boss: BossService,
    private toastCtrl: ToastController,
    private router : Router
  ) { }

  ngOnInit() {
    this.boss = new Bosses();
  }


  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Nouveau Boss enregistré',
      duration: 2000
    });
    (await toast).present().then(() => {
      setTimeout(() => {
        this.router.navigate(['/boss']);
      }, 2000);
    });
  }

  add() {
    this.Boss.saveNewBoss(this.boss).subscribe(() => {
      this.boss = new Bosses();
      this.presentToast();
    });
  }

}
