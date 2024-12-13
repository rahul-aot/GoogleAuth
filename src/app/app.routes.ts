import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: '',
    redirectTo: 'login', // Redirect to 'login' as the default route
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'login', // Fallback route for unknown paths
  },
];
