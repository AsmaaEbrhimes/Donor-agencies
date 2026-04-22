import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Notivication } from './notivication';

describe('Notivication', () => {
  let component: Notivication;
  let fixture: ComponentFixture<Notivication>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Notivication]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Notivication);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
