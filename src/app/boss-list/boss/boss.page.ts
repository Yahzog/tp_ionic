import {Component, OnInit} from '@angular/core';
import {AlertController, ToastController} from "@ionic/angular";
import {ActivatedRoute, Router} from "@angular/router";
import {BossService} from "../../boss.service";
import {Bosses} from "../../models/boss.model";

@Component({
  selector: 'app-boss',
  templateUrl: './boss.page.html',
  styleUrls: ['./boss.page.scss'],
})
export class BossPage implements OnInit {
  modif: boolean = false;
  boss!: Bosses;

  constructor(
    private alertCtrl: AlertController,
    private route: ActivatedRoute,
    private Boss: BossService,
    private toastCtrl: ToastController,
    private router: Router
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.Boss.get(id).subscribe((value: any) => {
      this.boss = value;
    });
  }

  async setModif() {
    if (!this.modif) {
      const alert = await this.alertCtrl.create({
        header: 'Modification',
        subHeader: 'Voulez vous modifier ce boss ?',
        buttons: [
          {
            text: 'Non',
            role: 'cancel'
          }, {
            text: 'Oui',
            handler: () => {this.modif = !this.modif;}
          }
        ]
      });

      await alert.present();
    } else
      {
        this.modif = !this.modif;
      }
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Vos modifications sont enregistrées',
      duration: 2000
    });
    (await toast).present();
  }


  onModif() {
    this.Boss.update(this.boss).subscribe(() => {
      this.presentToast();
      this.modif = false;
    });
  }

  onDelete(id: any) {
    this.Boss.delete(id);
    this.router.navigate(['/bosss']);
  }
}
