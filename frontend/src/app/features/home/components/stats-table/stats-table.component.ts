import { Component, InputSignal, computed, input, signal } from '@angular/core';
import { IonToggle, IonCard } from '@ionic/angular/standalone';
import { LogoComponent } from 'src/app/shared/components/logo/logo.component';
import { PlayingTimePipe } from 'src/app/shared/pipes/playing-time.pipe';
import { Player } from '../../entities/home.entities';
import { StatTableRowComponent } from './stat-table-row/stat-table-row.component';
import { StatTableHeaderComponent } from './stat-table-header/stat-table-header.component';

@Component({
  selector: 'fnba-stats-table',
  standalone: true,
  imports: [
    IonToggle,
    IonCard,
    PlayingTimePipe,
    LogoComponent,
    StatTableRowComponent,
    StatTableHeaderComponent,
  ],
  template: `
    <ion-card>
      <div class="flex justify-between p-4">
        <div class="flex gap-2">
          <fnba-logo [teamId]="teamId()" [width]="24" />
          <span class="text-xl">{{ teamName() }}</span>
        </div>
        <ion-toggle [checked]="allStats()" (ionChange)="toggleStats()"
          >All stats</ion-toggle
        >
      </div>
      <div class="flex">
        <table class="table-auto w-fit overflow-x-scroll">
          <thead>
            <tr class="border-b-2">
              <th class="border-r td-padding font-semibold">
                {{ labelPlayers() }}
              </th>
            </tr>
          </thead>
          <tbody>
            @for(player of onCourt(); track $index){
            <tr>
              <td class="border-r td-padding whitespace-nowrap">
                {{ player.nameI }}
              </td>
            </tr>
            }
          </tbody>
          <thead>
            <tr class="border-b-2">
              <th class="border-r td-padding font-semibold">BENCH</th>
            </tr>
          </thead>
          <tbody>
            @for(player of offCourt(); track $index){
            <tr>
              <td class="border-r td-padding whitespace-nowrap">
                {{ player.nameI }}
              </td>
            </tr>
            }
          </tbody>
        </table>
        <div class="overflow-x-scroll w-full">
          <table class="table-auto w-fit">
            <thead>
              <tr
                class="border-b-2"
                fnba-stat-table-header
                [allStats]="allStats()"
              ></tr>
            </thead>
            <tbody>
              @for(player of onCourt(); track $index){
              <tr
                fnba-stat-table-row
                [stats]="player.statistics"
                [allStats]="allStats()"
              ></tr>
              }
            </tbody>
            <thead>
              <tr
                class="border-b-2"
                fnba-stat-table-header
                [allStats]="allStats()"
              ></tr>
            </thead>
            <tbody>
              @for(player of offCourt(); track $index){
              <tr
                fnba-stat-table-row
                [stats]="player.statistics"
                [allStats]="allStats()"
              ></tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    </ion-card>
  `,
})
export class StatsTableComponent {
  teamId: InputSignal<string> = input.required();
  teamName: InputSignal<string> = input.required();
  players: InputSignal<Player[]> = input.required();
  isGameActive: InputSignal<boolean> = input.required();

  allStats = signal(true);

  toggleStats() {
    this.allStats.set(!this.allStats());
  }

  labelPlayers = computed(() => {
    return !this.isGameActive() ? 'STARTERS' : 'ON COURT';
  });

  onCourt = computed(() => {
    if (!this.isGameActive()) {
      return this.players().filter((player) => player.oncourt === '1');
    } else {
      return this.players().filter((player) => player.starter === '1');
    }
  });

  offCourt = computed(() => {
    if (!this.isGameActive()) {
      return this.players().filter((player) => player.oncourt === '0');
    } else {
      return this.players().filter((player) => player.starter === '0');
    }
  });
}
