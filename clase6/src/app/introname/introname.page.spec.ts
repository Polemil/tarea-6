import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntronamePage } from './introname.page';

describe('IntronamePage', () => {
  let component: IntronamePage;
  let fixture: ComponentFixture<IntronamePage>;

  beforeEach((() => {
    fixture = TestBed.createComponent(IntronamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
