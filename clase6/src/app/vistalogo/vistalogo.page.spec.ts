import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VistalogoPage } from './vistalogo.page';

describe('VistalogoPage', () => {
  let component: VistalogoPage;
  let fixture: ComponentFixture<VistalogoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VistalogoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
