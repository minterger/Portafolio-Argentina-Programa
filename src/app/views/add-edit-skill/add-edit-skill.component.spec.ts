import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSkillComponent } from './add-edit-skill.component';

describe('AddEditSkillComponent', () => {
  let component: AddEditSkillComponent;
  let fixture: ComponentFixture<AddEditSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEditSkillComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddEditSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
