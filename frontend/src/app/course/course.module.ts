import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { AddCourseDetailsComponent } from './add-course-details/add-course-details.component';
import { EditCourseDetailsComponent } from './edit-course-details/edit-course-details.component';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ConfirmationDialogueComponent } from '../components/confirmation-dialogue/confirmation-dialogue.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    CoursesComponent,
    AddCourseDetailsComponent,
    EditCourseDetailsComponent,
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule, MatChipsModule, MatProgressBarModule, CommonModule, MatIconModule, MatDialogModule, ConfirmationDialogueComponent, MatPaginatorModule
  ]
})
export class CourseModule { }
