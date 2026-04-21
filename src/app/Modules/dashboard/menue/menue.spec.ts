import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menue } from './menue';

describe('Menue', () => {
  let component: Menue;
  let fixture: ComponentFixture<Menue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Menue]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Menue);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
