import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../../models/Course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly apiUrl = "http://localhost:3000/";
  students: any = [];

  constructor(private http: HttpClient) {

  }

  getAllCourses(): Observable<any> {
    console.log("Inside getAllCourses");
    return this.http.get(this.apiUrl + "courses");
  }

  deleteCourse(courseCode: any) {
    return this.http.delete(`${this.apiUrl}courses/deleteCourse/${courseCode}`);
  }

  updateCourse(course: Course) {
    return this.http.put(`${this.apiUrl}courses/updateCourse/${course.courseCode}`, course);
  }

  addCourse(course: Course) {
    return this.http.post(`${this.apiUrl}courses`, course);
  }

}
