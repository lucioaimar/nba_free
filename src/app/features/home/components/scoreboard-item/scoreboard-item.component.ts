import {
  Component,
  Input,
  OnInit,
  Signal,
  WritableSignal,
  computed,
  inject,
  signal,
} from '@angular/core';
import { Scoreboard, GameStatus } from '../../entities/home.entities';
import { IonicModule } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { LogoHelperService } from 'src/app/utils/logo/logo-helper.service';
import { ScoreboardTeamComponent } from '../scoreboard-team/scoreboard-team.component';
import { PlayingTimePipe } from 'src/app/shared/pipes/playing-time.pipe';

@Component({
  selector: 'app-scoreboard-item',
  template: `
    <ion-card class="ion-padding m-0 h-44">
      <header class="mb-2">
        @switch (scoreBoardWithImage().gameStatus) {
          @case (gameStatus.NOT_STARTED) {
            <span>{{ scoreBoardWithImage().gameTimeUTC | date }}</span>
          }
          @case (gameStatus.PREGAME) {
            <span>PREGAME</span>
          }
          @case (gameStatus.PLAYING) {
            <span>{{ scoreBoardWithImage().gameClock | playingTime }} {{scoreBoardWithImage().period}}Q</span>
          }
          @case (gameStatus.FINAL) {
            <span>FINAL</span>
          }
        }
      </header>
      <app-scoreboard-team [team]="scoreBoardWithImage().awayTeam" />
      <div class="text-center w-full">&#64;</div>
      <app-scoreboard-team [team]="scoreBoardWithImage().homeTeam" />
    </ion-card>
  `,
  standalone: true,
  imports: [IonicModule, ScoreboardTeamComponent, PlayingTimePipe, DatePipe],
})
export class ScoreboardItemComponent {
  private _scoreboard: WritableSignal<Scoreboard | undefined> = signal(undefined);

  @Input() set scoreboard(scoreboard: Scoreboard) {
    this._scoreboard.set(scoreboard);
  }

  gameStatus = GameStatus

  private logoHelper = inject(LogoHelperService);

  scoreBoardWithImage: Signal<Scoreboard> = computed(() => {
    const awayTeamId = this._scoreboard()?.awayTeam.teamId;
    const homeTeamId = this._scoreboard()?.homeTeam.teamId;
    return {
      ...this._scoreboard()!,
      awayTeam: {
        ...this._scoreboard()!.awayTeam,
        logoUrl: this.logoHelper.createLogoUrlByTeamId(awayTeamId!),
      },
      homeTeam: {
        ...this._scoreboard()!.homeTeam,
        logoUrl: this.logoHelper.createLogoUrlByTeamId(homeTeamId!),
      },
    };
  });
}
