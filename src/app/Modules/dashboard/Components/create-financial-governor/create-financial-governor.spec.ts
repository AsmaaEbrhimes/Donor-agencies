import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFinancialGovernor } from './create-financial-governor';

describe('CreateFinancialGovernor', () => {
  let component: CreateFinancialGovernor;
  let fixture: ComponentFixture<CreateFinancialGovernor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateFinancialGovernor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateFinancialGovernor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
