import { Component, Signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomeService } from '../../services/home.service';
import {
  LeagueLeader,
  Scoreboard,
  StatAbbreviation,
} from '../../entities/home.entities';
import { ScoreboardListComponent } from '../../components/scoreboard-list/scoreboard-list.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { LeagueLeadersComponent } from '../../components/league-leaders/league-leaders.component';

@Component({
  selector: 'app-home',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding gap-5">
      <app-scoreboard-list [scoreboardList]="scoreboardList()" />
      League Leaders
      <app-league-leaders [leagueLeaders]="leagueLeadersPts()" />
    </ion-content>
  `,
  standalone: true,
  imports: [IonicModule, CommonModule, ScoreboardListComponent, LeagueLeadersComponent],
})
export class HomePage {
  private homeService = inject(HomeService);

  scoreboardList: Signal<Scoreboard[]> = this.homeService.scoreBoardList;
  leagueLeadersPts: Signal<LeagueLeader[]> = toSignal(
    this.homeService.getLeagueLeaders(StatAbbreviation.PTS, 5),
    {
      initialValue: [] as LeagueLeader[],
    }
  );
}
