import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  private loginUrl = 'http://localhost:5000/api/auth/login';
  private registerUrl = 'http://localhost:5000/api/auth/register';
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post<any>(this.loginUrl, credentials);
  }

  register(credentials: { name: string, email: string, password: string, role: string }): Observable<any> {
    return this.http.post<any>(this.registerUrl, credentials);
  }


  logout(): void {
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
