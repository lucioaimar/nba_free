import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BoxscorePage } from './boxscore.page';

describe('BoxscorePage', () => {
  let component: BoxscorePage;
  let fixture: ComponentFixture<BoxscorePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BoxscorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
