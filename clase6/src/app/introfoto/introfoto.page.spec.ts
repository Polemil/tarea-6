import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntrofotoPage } from './introfoto.page';

describe('IntrofotoPage', () => {
  let component: IntrofotoPage;
  let fixture: ComponentFixture<IntrofotoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IntrofotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
