import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VistapaisPage } from './vistapais.page';

describe('VistapaisPage', () => {
  let component: VistapaisPage;
  let fixture: ComponentFixture<VistapaisPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VistapaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
