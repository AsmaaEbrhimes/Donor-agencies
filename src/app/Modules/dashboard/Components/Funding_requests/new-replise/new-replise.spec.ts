import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReplise } from './new-replise';

describe('NewReplise', () => {
  let component: NewReplise;
  let fixture: ComponentFixture<NewReplise>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewReplise]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewReplise);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
