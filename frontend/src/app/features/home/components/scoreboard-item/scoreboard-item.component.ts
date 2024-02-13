import {
  Component,
  Input,
  OnInit,
  Signal,
  WritableSignal,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';
import { Scoreboard, GameStatus } from '../../entities/home.entities';
import { IonicModule } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { LogoHelperService } from 'src/app/utils/logo/logo-helper.service';
import { ScoreboardTeamComponent } from '../scoreboard-team/scoreboard-team.component';
import { PlayingTimePipe } from 'src/app/shared/pipes/playing-time.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-scoreboard-item',
  template: `
    <ion-card class="ion-padding m-0 h-44" [routerLink]="['boxscore', scoreboard().gameId]">
      <header class="mb-2">
        @switch (scoreboard().gameStatus) {
          @case (gameStatus.NOT_STARTED) {
            <span>{{ scoreboard().gameTimeUTC | date: "shortTime" }}</span>
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
      <app-scoreboard-team [team]="scoreboard().awayTeam" />
      <div class="text-center w-full">&#64;</div>
      <app-scoreboard-team [team]="scoreboard().homeTeam" />
    </ion-card>
  `,
  standalone: true,
  imports: [IonicModule, ScoreboardTeamComponent, PlayingTimePipe, DatePipe, RouterLink],
})
export class ScoreboardItemComponent {

  scoreboard = input.required<Scoreboard>();

  gameStatus = GameStatus;
}
