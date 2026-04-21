import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageInDashboard } from './main-page-in-dashboard';

describe('MainPageInDashboard', () => {
  let component: MainPageInDashboard;
  let fixture: ComponentFixture<MainPageInDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainPageInDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageInDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
