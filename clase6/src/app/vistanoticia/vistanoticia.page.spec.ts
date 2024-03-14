import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VistanoticiaPage } from './vistanoticia.page';

describe('VistanoticiaPage', () => {
  let component: VistanoticiaPage;
  let fixture: ComponentFixture<VistanoticiaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VistanoticiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
