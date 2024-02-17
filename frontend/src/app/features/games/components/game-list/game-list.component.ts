import { Component, input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Schedule } from '../../entities/games.entities';
import { DatePipe } from '@angular/common';
import { GameCardComponent } from '../game-card/game-card.component';

@Component({
  selector: 'app-game-list',
  standalone: true,
  template: `
    @for (sch of schedules(); track $index) {
    <ion-card class="rounded-sm p-4">
      <h2 class="text-2xl m-2">{{ sch.gameDate | date : 'fullDate' }}</h2>
      @for (game of sch.games; track $index) {
      <div class="border-y border-gray-500">
        <app-game-card [game]="game" />
      </div>
      }
    </ion-card>
    }
  `,
  imports: [IonicModule, DatePipe, GameCardComponent],
})
export class GameListComponent {
  schedules = input.required<Schedule[]>();
}
