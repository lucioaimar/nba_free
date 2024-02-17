import {
  Component,
  Signal,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { GamesService } from '../../services/games.service';
import { Schedule } from '../../entities/games.entities';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { switchMap, tap } from 'rxjs';
import { GameCardComponent } from '../../components/game-card/game-card.component';
import { GameListComponent } from '../../components/game-list/game-list.component';
import { CalendarComponent } from 'src/app/shared/components/calendar/calendar.component';
import { SpinnerComponent } from 'src/app/shared/components/spinner/spinner.component';
import { EmptyMessageComponent } from 'src/app/shared/components/empty-message/empty-message.component';

@Component({
  selector: 'app-games',
  standalone: true,
  template: `
    <div class="overflow-auto">
      <app-calendar [(selectedDate)]="day" />
      @if(gameSchedule() && !loading() && !empty()){
      <app-game-list [schedules]="gameSchedule()" />
      } @else if (loading()) {
      <app-spinner label="Loading games..." [size]="100" />
      } @else if (empty()){
      <app-empty-message label="games" />
      }
    </div>
  `,
  imports: [
    IonicModule,
    CommonModule,
    GameCardComponent,
    GameListComponent,
    CalendarComponent,
    SpinnerComponent,
    EmptyMessageComponent,
  ],
})
export class GamesPage {
  gameService = inject(GamesService);

  day = signal(new Date());

  loading = signal(true);

  schedule$ = toObservable(this.day).pipe(
    tap(() => this.loading.set(true)),
    switchMap((d) => this.gameService.getScheduleByDay(d)),
    tap(() => this.loading.set(false))
  );

  gameSchedule: Signal<Schedule[]> = toSignal(this.schedule$, {
    initialValue: [],
  });

  empty = computed(() => {
    return !this.loading() && this.gameSchedule().length === 0;
  });

  private ef = effect(() => {
    console.log(this.empty());
  });
}
