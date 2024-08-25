import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', loadComponent: () => import('./shared/components/layout/layout.component').then(m => m.LayoutComponent)
  },
  {
    path: '', redirectTo: '/', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: '/', pathMatch: 'full'
  }
];
