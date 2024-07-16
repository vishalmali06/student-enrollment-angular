import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: any;
  registerForm: any;
  activeForm: 'login' | 'register' = 'login';

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar) { }
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['']
    });
  }

  toggleForm(form: 'login' | 'register') {
    this.activeForm = form;
  }

  async login() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      try {
        const res = await this.authService.login({ email, password }).toPromise();
        localStorage.setItem('userInfo', JSON.stringify(res));
        this.router.navigate(['/dashboard']);
      } catch (error) {
        console.error('Login failed', error);
        this.snackBar.open('Login failed. Please try again!', 'Close', { duration: 3000 });
      }
    } else {
      this.snackBar.open('Invalid email or password!', 'Close', { duration: 3000 });
    }

  }

  async register() {
    if (this.registerForm.valid) {
      const { name, email, password, role } = this.registerForm.value;

      try {
        const res = await this.authService.register({ name, email, password, role }).toPromise();
        localStorage.setItem('userInfo', JSON.stringify(res));
        this.activeForm = 'login';
      } catch (error) {
        console.error('Login failed', error);
        this.snackBar.open('Login failed. Please try again!', 'Close', { duration: 3000 });
      }
    } else {
      this.snackBar.open('Invalid email or password!', 'Close', { duration: 3000 });
    }
  }


}
