import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentsService } from './services/students/students.service';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './dashboard/dashboard.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,DashboardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'frontend';
  students: any = [];

  constructor(private studentService: StudentsService) { }

}
