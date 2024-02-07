import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../../features/home/pages/home/home.page').then(
            (m) => m.HomePage
          ),
      },
      {
        path: 'team',
        loadComponent: () =>
          import('../../features/teams/pages/team/team.page').then(
            (m) => m.TeamPage
          ),
      },
      {
        path: 'team/:id',
        loadComponent: () =>
          import(
            '../../features/teams/pages/team-detail/team-detail.page'
          ).then((m) => m.TeamDetailPage),
      },
      {
        path: 'team',
        loadComponent: () =>
          import('../../features/teams/pages/team/team.page').then(
            (m) => m.TeamPage
          ),
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];
