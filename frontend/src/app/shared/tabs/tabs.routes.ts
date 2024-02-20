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
        path: 'home/boxscore/:id',
        loadComponent: () =>
          import('../../features/home/pages/boxscore/boxscore.page').then(
            (m) => m.BoxscorePage
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
        path: 'games',
        loadComponent: () => import('../../features/games/pages/games/games.page').then( m => m.GamesPage)
      },
      {
        path: 'players',
        loadComponent: () => import('../../features/players/pages/players/players.page').then( m => m.PlayersPage)
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];
