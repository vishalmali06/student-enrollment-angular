import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrl: './dashboard-main.component.sass'
})
export class DashboardMainComponent {

  constructor(
    private router: Router,) { }

  Logout() {
    localStorage.removeItem('userInfo');
    this.router.navigate(['/login']);
  }
}