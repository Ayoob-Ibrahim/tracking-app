import { Routes } from '@angular/router';
import { LayoutComponent } from './structure-layout/layout/layout.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { GridviewComponent } from './page/gridview/gridview.component';
import { LoginComponent } from './page/login/login.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: '', component: LayoutComponent,
        children: [
            {
                path: 'dashboard',
                loadComponent: () =>
                    import('./page/dashboard/dashboard.component').then((m) => m.DashboardComponent),
            },
            {
                path: 'gridview',
                loadComponent: () =>
                    import('./page/gridview/gridview.component').then((m) => m.GridviewComponent),
            },
        ]
    },

];
