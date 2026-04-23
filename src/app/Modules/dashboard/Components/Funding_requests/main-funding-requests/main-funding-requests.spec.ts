import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFundingRequests } from './main-funding-requests';

describe('MainFundingRequests', () => {
  let component: MainFundingRequests;
  let fixture: ComponentFixture<MainFundingRequests>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainFundingRequests]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainFundingRequests);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
