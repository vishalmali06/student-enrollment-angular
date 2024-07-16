import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCourseDetailsComponent } from './edit-course-details.component';

describe('EditCourseDetailsComponent', () => {
  let component: EditCourseDetailsComponent;
  let fixture: ComponentFixture<EditCourseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCourseDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditCourseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
