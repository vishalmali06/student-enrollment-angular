import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private readonly apiUrl = "http://localhost:3000/";
  students: any = [];

  constructor(private http: HttpClient) {

  }

  getAllStudents(): Observable<any> {
    console.log("Inside getAllStudents");
    return this.http.get(this.apiUrl + "students");
  }

}
