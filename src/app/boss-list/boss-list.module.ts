import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BossListPageRoutingModule } from './boss-list-routing.module';

import { BossListPage } from './boss-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BossListPageRoutingModule
  ],
  declarations: [BossListPage]
})
export class BossListPageModule {}
