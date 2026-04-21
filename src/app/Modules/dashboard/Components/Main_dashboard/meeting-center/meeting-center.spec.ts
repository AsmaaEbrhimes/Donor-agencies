import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingCenter } from './meeting-center';

describe('MeetingCenter', () => {
  let component: MeetingCenter;
  let fixture: ComponentFixture<MeetingCenter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeetingCenter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetingCenter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
