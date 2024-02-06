import {Component, OnInit} from '@angular/core';
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-boss',
  templateUrl: './boss.page.html',
  styleUrls: ['./boss.page.scss'],
})
export class BossPage implements OnInit {
  modif: boolean = false;

  constructor(private alertCtrl: AlertController) {
  }

  ngOnInit() {
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
}
