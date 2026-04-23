import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundingRequests } from './funding-requests';

describe('FundingRequests', () => {
  let component: FundingRequests;
  let fixture: ComponentFixture<FundingRequests>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FundingRequests]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundingRequests);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
