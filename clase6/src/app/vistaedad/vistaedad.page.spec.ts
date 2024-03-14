import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VistaedadPage } from './vistaedad.page';

describe('VistaedadPage', () => {
  let component: VistaedadPage;
  let fixture: ComponentFixture<VistaedadPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VistaedadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
