import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BossNewPageRoutingModule } from './boss-new-routing.module';

import { BossNewPage } from './boss-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BossNewPageRoutingModule
  ],
  declarations: [BossNewPage]
})
export class BossNewPageModule {}
