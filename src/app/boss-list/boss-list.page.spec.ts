import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BossListPage } from './boss-list.page';

describe('BossListPage', () => {
  let component: BossListPage;
  let fixture: ComponentFixture<BossListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BossListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
