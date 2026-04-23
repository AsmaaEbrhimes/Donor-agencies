import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejecteRequests } from './rejecte-requests';

describe('RejecteRequests', () => {
  let component: RejecteRequests;
  let fixture: ComponentFixture<RejecteRequests>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RejecteRequests]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejecteRequests);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
