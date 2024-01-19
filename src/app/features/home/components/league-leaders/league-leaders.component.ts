import { Component, Input, OnInit, inject } from '@angular/core';
import { LeagueLeader } from '../../entities/home.entities';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-league-leaders',
  template: `
    <div class="flex flex-col gap-1">
      @for (leagueLeader of leagueLeaders; track $index) {
      <ion-card class="ion-padding m-0">
        <div>{{ leagueLeader.PLAYER }}</div>
        <div class=" text-lg font-semibold">{{ leagueLeader.PTS }}</div>
      </ion-card>
      }
    </div>
  `,
  standalone: true,
  imports: [IonicModule],
})
export class LeagueLeadersComponent {
  @Input() leagueLeaders: LeagueLeader[] = [];
}
