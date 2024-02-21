import {
  Component,
  input
} from '@angular/core';
import { Scoreboard, GameStatus } from '../../entities/home.entities';
import { IonCard } from '@ionic/angular/standalone';
import { DatePipe } from '@angular/common';
import { ScoreboardTeamComponent } from '../scoreboard-team/scoreboard-team.component';
import { PlayingTimePipe } from 'src/app/shared/pipes/playing-time.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'fnba-scoreboard-item',
  standalone: true,
  imports: [IonCard, ScoreboardTeamComponent, PlayingTimePipe, DatePipe, RouterLink],
  template: `
    <ion-card class="ion-padding m-0 h-44" [routerLink]="['boxscore', scoreboard().gameId]">
      <header class="mb-2">
        @switch (scoreboard().gameStatus) {
          @case (gameStatus.NOT_STARTED) {
            <span>{{ scoreboard().gameTimeUtc | date: "shortTime" }}</span>
          }
          @case (gameStatus.PREGAME) {
            <span>PREGAME</span>
          }
          @case (gameStatus.PLAYING) {
            <span>{{ scoreboard().gameClock | playingTime }} {{scoreboard().period}}Q</span>
          }
          @case (gameStatus.FINAL) {
            <span>FINAL</span>
          }
        }
      </header>
      <fnba-scoreboard-team [team]="scoreboard().awayTeam" />
      <div class="text-center w-full">&#64;</div>
      <fnba-scoreboard-team [team]="scoreboard().homeTeam" />
    </ion-card>
  `
})
export class ScoreboardItemComponent {

  scoreboard = input.required<Scoreboard>();

  gameStatus = GameStatus;
}
