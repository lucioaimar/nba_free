import { Component, Signal, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { IonContent } from '@ionic/angular/standalone';
import { HomeService } from '../../services/home.service';
import {
  LeagueLeader,
  Scoreboard,
  StatAbbreviation,
} from '../../entities/home.entities';
import { ScoreboardListComponent } from '../../components/scoreboard-list/scoreboard-list.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { LeagueLeadersComponent } from '../../components/league-leaders/league-leaders.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';

@Component({
  selector: 'fnba-home',
  standalone: true,
  imports: [
    IonContent,
    NgOptimizedImage,
    CommonModule,
    ScoreboardListComponent,
    LeagueLeadersComponent,
    HeaderComponent,
  ],
  template: `
    <fnba-header title="Home"></fnba-header>
    <ion-content class="ion-padding gap-5">
      <fnba-scoreboard-list [scoreboardList]="scoreboardList()" />
      <h2 class="my-5 text-xl font-semibold">League Leaders</h2>
      <div class="flex flex-col gap-2">
        <fnba-league-leaders
          title="Points Leaders"
          [leagueLeaders]="leagueLeadersPts()"
        />
        <fnba-league-leaders
          title="Rebounds Leaders"
          category="REB"
          [leagueLeaders]="leagueLeadersReb()"
        />
        <fnba-league-leaders
          title="Assists Leaders"
          category="AST"
          [leagueLeaders]="leagueLeadersAst()"
        />
      </div>
    </ion-content>
  `,
})
export class HomePage {
  private homeService = inject(HomeService);

  scoreboardList: Signal<Scoreboard[]> = this.homeService.scoreBoardList;

  //League leaders service calls
  leagueLeadersPts: Signal<LeagueLeader[]> = toSignal(
    this.homeService.getLeagueLeaders(StatAbbreviation.PTS, 5),
    {
      initialValue: [] as LeagueLeader[],
    }
  );
  leagueLeadersReb: Signal<LeagueLeader[]> = toSignal(
    this.homeService.getLeagueLeaders(StatAbbreviation.REB, 5),
    {
      initialValue: [] as LeagueLeader[],
    }
  );
  leagueLeadersAst: Signal<LeagueLeader[]> = toSignal(
    this.homeService.getLeagueLeaders(StatAbbreviation.AST, 5),
    {
      initialValue: [] as LeagueLeader[],
    }
  );
}
