import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Course } from '../../models/Course';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-course-details',
  templateUrl: './add-course-details.component.html',
  styleUrls: ['./add-course-details.component.sass']
})
export class AddCourseDetailsComponent {
  @Output() courseAdded = new EventEmitter<Course>();
  courseForm!: FormGroup;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddCourseDetailsComponent>) {
    this.createForm();
  }

  createForm() {
    this.courseForm = this.fb.group({
      courseCode: ['', Validators.required],
      courseName: ['', Validators.required],
      prerequisites: this.fb.array([]),
      studentsEnrolled: this.fb.array([])
    });
}

  onCancel(): void {
    this.dialogRef.close('cancel');
  }

  onConfirm(): void {
    console.log("this.courseForm.value : ", this.courseForm.value);
    this.courseAdded.emit(this.courseForm.value);
    this.dialogRef.close('confirm');
  }
}
