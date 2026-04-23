import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialGovernor } from './financial-governor';

describe('FinancialGovernor', () => {
  let component: FinancialGovernor;
  let fixture: ComponentFixture<FinancialGovernor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FinancialGovernor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialGovernor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
