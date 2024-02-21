import { Component, input } from '@angular/core';
import { IonCard } from '@ionic/angular/standalone';
import { Schedule } from '../../entities/games.entities';
import { DatePipe } from '@angular/common';
import { GameCardComponent } from '../game-card/game-card.component';

@Component({
  selector: 'fnba-game-list',
  standalone: true,
  imports: [IonCard, DatePipe, GameCardComponent],
  template: `
    @for (sch of schedules(); track $index) {
    <ion-card class="rounded-sm p-4">
      <h2 class="text-2xl m-2">{{ sch.gameDate | date : 'fullDate' }}</h2>
      @for (game of sch.games; track $index) {
      <div class="border-y border-gray-500">
        <fnba-game-card [game]="game" />
      </div>
      }
    </ion-card>
    }
  `
})
export class GameListComponent {
  schedules = input.required<Schedule[]>();
}
