import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeThemeModeComponent } from './change-theme-mode.component';

describe('ChangeThemeModeComponent', () => {
  let component: ChangeThemeModeComponent;
  let fixture: ComponentFixture<ChangeThemeModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeThemeModeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeThemeModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
