import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsProject } from './details-project';

describe('DetailsProject', () => {
  let component: DetailsProject;
  let fixture: ComponentFixture<DetailsProject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsProject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsProject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
