import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditStudiesComponent } from './add-edit-studies.component';

describe('AddEditStudiesComponent', () => {
  let component: AddEditStudiesComponent;
  let fixture: ComponentFixture<AddEditStudiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditStudiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
