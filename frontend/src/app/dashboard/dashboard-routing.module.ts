import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { StudentListComponent } from '../student/student-list/student-list.component';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';

const routes: Routes = [
  {
    path:"",
    component:DashboardMainComponent,
    children:[
      {
        path:"home",
        component:DashboardHomeComponent
      },
      {
        path:"students",
        component:StudentListComponent
      },
      {
        path:"courses",
        loadChildren: () => import("../course/course.module").then( courseModule => courseModule.CourseModule)

      },
      {
        path:"",
        redirectTo:"home",
        pathMatch:'full'
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
