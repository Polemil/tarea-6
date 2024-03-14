import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VistaclimaPage } from './vistaclima.page';

describe('VistaclimaPage', () => {
  let component: VistaclimaPage;
  let fixture: ComponentFixture<VistaclimaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VistaclimaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
