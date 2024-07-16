import { Component } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ConfirmationDialogueComponent } from '../../components/confirmation-dialogue/confirmation-dialogue.component';
import { CoursesService } from '../../services/courses/courses.service';
import { Course } from '../../models/Course';
import { AddCourseDetailsComponent } from '../add-course-details/add-course-details.component';
import { EditCourseDetailsComponent } from '../edit-course-details/edit-course-details.component';
import { CourseDetailsComponent } from '../course-details/course-details.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.sass'
})
export class CoursesComponent {
  pagedCourses: Course[] = [];
  courses: Course[] = [];
  pageSize = 10;
  pageEvent!: PageEvent;

  constructor(private courseService: CoursesService, public dialog: MatDialog) {
  }

  ngOnInit() {
    console.log("Course loaded")
    this.getAllCourses();
    // this.onPageChange({
    //   pageIndex: 0,
    //   pageSize: this.pageSize,
    //   length: this.courses.length
    // });
  }


  onPageChange(event: PageEvent) {
    const startIdx = event.pageIndex * event.pageSize;
    this.pagedCourses = this.courses.slice(startIdx, startIdx + event.pageSize);
  }


  getAllCourses() {
    this.courseService.getAllCourses().subscribe({
      next: (data: any) => {
        this.courses = data;
        console.log("Courses : ", this.courses);
        this.resetPagination();
      }, error: (err: any) => {
        console.error('Error:', err);
      },
    });
  }

  resetPagination() {
    if (!this.pageEvent) {
      this.pageEvent = {
        pageIndex: 0,
        pageSize: this.pageSize,
        length: this.courses.length
      };
    }
    this.onPageChange(this.pageEvent);
  }
  

  openDeleteConfirmationDialog(courseCode: any) {
    console.log("Inside openDeleteConfirmationDialog : ", courseCode);
    const dialogRef = this.dialog.open(ConfirmationDialogueComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        // Call the service method to delete the course
        this.courseService.deleteCourse(courseCode).subscribe(() => {
          this.getAllCourses();
          this.onPageChange(this.pageEvent);
        });
      }
    });
  }


  showEditForm(course: Course) {
    console.log("Inside showEditForm : ", course);
    const dialogRef = this.dialog.open(EditCourseDetailsComponent, {
      data: { course: course } // Pass the course object to the dialog
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        // Call the service method to update the course
        this.courseService.updateCourse(dialogRef.componentInstance.course).subscribe(() => {
          this.getAllCourses();
        });
      }
    });
  }

  addCourse() {
    const dialogRef = this.dialog.open(AddCourseDetailsComponent, {
      // data: { course: this.course }
    });

    dialogRef.componentInstance.courseAdded.subscribe((newCourse: Course) => {
      // Handle the new course
      console.log("newCourse : ", newCourse);
      this.courseService.addCourse(newCourse).subscribe(() => {
        this.getAllCourses();
      });
    });
  }


  openCourseDetailsDialog(course: Course): void {
    console.log("inside openCourseDetailsDialog");
    this.dialog.open(CourseDetailsComponent, {
      data: { course },
      width: '400px',
      height: '250px'
    });
  }

}
