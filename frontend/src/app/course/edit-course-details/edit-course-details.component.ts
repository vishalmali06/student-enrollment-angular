import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Course } from '../../models/Course';

@Component({
  selector: 'app-edit-course-details',
  templateUrl: './edit-course-details.component.html',
  styleUrls: ['./edit-course-details.component.sass']
})
export class EditCourseDetailsComponent {
  courseForm: FormGroup;
  course: Course;
  initialCourse: Course;

  constructor(
    public dialogRef: MatDialogRef<EditCourseDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) {
    this.course = data.course;
    this.initialCourse = {...this.course}; // Save the initial course data
    this.courseForm = this.formBuilder.group({
      courseCode: [this.course.courseCode],
      courseName: [this.course.courseName],
      faculty: [this.course.faculty],
      courseDuration: [this.course.courseDuration],
      courseDesc: [this.course.courseDesc],
      prerequisites: [this.course.prerequisites],
      studentsEnrolled: [this.course.studentsEnrolled]
    });

    // Subscribe to form value changes
    this.courseForm.valueChanges.subscribe(() => {
      this.course = this.courseForm.value;
    });
  }

  onCancel(): void {
    this.dialogRef.close('cancel');
  }

  onConfirm(): void {
    if (this.courseForm.valid && this.isChanged()) {
      this.dialogRef.close('confirm');
    }
  }

  isChanged(): boolean {
    return JSON.stringify(this.course) !== JSON.stringify(this.initialCourse);
  }
}
