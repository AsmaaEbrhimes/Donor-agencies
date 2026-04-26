import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DilogFilterProjects } from './dilog-filter-projects';

describe('DilogFilterProjects', () => {
  let component: DilogFilterProjects;
  let fixture: ComponentFixture<DilogFilterProjects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DilogFilterProjects]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DilogFilterProjects);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
