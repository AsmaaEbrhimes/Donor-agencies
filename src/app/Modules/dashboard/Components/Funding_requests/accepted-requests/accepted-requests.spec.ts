import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedRequests } from './accepted-requests';

describe('AcceptedRequests', () => {
  let component: AcceptedRequests;
  let fixture: ComponentFixture<AcceptedRequests>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcceptedRequests]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptedRequests);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
