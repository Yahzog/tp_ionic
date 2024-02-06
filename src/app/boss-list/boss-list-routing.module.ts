import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BossListPage } from './boss-list.page';

const routes: Routes = [
  {
    path: '',
    component: BossListPage
  },
  {
    path: 'new',
    loadChildren: () => import('./boss-new/boss-new.module').then( m => m.BossNewPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./boss/boss.module').then( m => m.BossPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BossListPageRoutingModule {}
