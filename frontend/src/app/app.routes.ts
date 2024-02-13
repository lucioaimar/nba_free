import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./shared/tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'boxscore',
    loadComponent: () => import('./features/home/pages/boxscore/boxscore.page').then( m => m.BoxscorePage)
  },
];
