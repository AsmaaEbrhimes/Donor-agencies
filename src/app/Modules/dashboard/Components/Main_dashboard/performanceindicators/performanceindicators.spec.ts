import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Performanceindicators } from './performanceindicators';

describe('Performanceindicators', () => {
  let component: Performanceindicators;
  let fixture: ComponentFixture<Performanceindicators>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Performanceindicators]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Performanceindicators);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
