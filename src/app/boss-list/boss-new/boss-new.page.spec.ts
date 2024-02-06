import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BossNewPage } from './boss-new.page';

describe('BossNewPage', () => {
  let component: BossNewPage;
  let fixture: ComponentFixture<BossNewPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BossNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
