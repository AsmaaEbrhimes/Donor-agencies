import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieCharts } from './pie-charts';

describe('PieCharts', () => {
  let component: PieCharts;
  let fixture: ComponentFixture<PieCharts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PieCharts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieCharts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
