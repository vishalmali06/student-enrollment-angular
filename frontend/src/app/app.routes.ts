import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"dashboard",
        loadChildren: () => import("./dashboard/dashboard.module").then( dashboardModule => dashboardModule.DashboardModule)
    },
    {
        path:"",
        redirectTo:"dashboard",
        pathMatch:"full"
    }
];

