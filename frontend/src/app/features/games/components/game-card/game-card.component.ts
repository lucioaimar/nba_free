import { Component, computed, input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ScheduleGame } from '../../entities/games.entities';
import { DatePipe } from '@angular/common';
import { LogoComponent } from 'src/app/shared/components/logo/logo.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-game-card',
  standalone: true,
  template: `
    <div class="px-2 py-4" [routerLink]="['/tabs/home', 'boxscore', game().gameId]">
      <h4 class="mb-2">
        {{ game().gameDateTimeUtc | date : 'shortTime' }}
      </h4>
      <section class="flex items-center mb-2">
        <app-logo [teamId]="game().awayTeam.teamId" [width]="50" />
        <div class="flex flex-col ml-2">
          <h5 class="text-xl font-semibold">
            {{awayTeamName()}}
          </h5>
          <p>
            {{awayRecord()}}, Away
          </p>
        </div>
        <div class="text-medium text-3xl ml-auto">{{game().awayTeam.score}}</div>
      </section>
      <section class="flex items-center ">
        <app-logo [teamId]="game().homeTeam.teamId" [width]="50" />
        <div class="flex flex-col ml-2">
          <h5 class="text-xl font-semibold">
            {{homeTeamName()}}
          </h5>
          <p>
            {{homeRecord()}}, Home
          </p>
        </div>
        <div class="text-medium text-3xl ml-auto">{{game().awayTeam.score}}</div>
      </section>
    </div>
  `,
  imports: [IonicModule, DatePipe, LogoComponent, RouterLink],
})
export class GameCardComponent {
  game = input.required<ScheduleGame>();

  awayTeamName = computed(() => {
    return this.game().awayTeam.teamCity + ' ' + this.game().awayTeam.teamName
  })

  awayRecord = computed(() => {
    return `${this.game().awayTeam.wins}-${this.game().awayTeam.losses}`
  })

  homeTeamName = computed(() => {
    return this.game().homeTeam.teamCity + ' ' + this.game().homeTeam.teamName
  })

  homeRecord = computed(() => {
    return `${this.game().homeTeam.wins}-${this.game().homeTeam.losses}`
  })
}
