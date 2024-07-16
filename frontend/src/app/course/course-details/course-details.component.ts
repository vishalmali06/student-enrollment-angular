import { Component, Inject } from '@angular/core';
import { Course } from '../../models/Course';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.sass'
})
export class CourseDetailsComponent {
  course: Course;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.course = data.course;
  }
}
