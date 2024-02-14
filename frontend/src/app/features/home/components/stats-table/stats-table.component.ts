import {
  Component,
  InputSignal,
  OnInit,
  WritableSignal,
  computed,
  effect,
  input,
  signal,
} from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LogoComponent } from 'src/app/shared/components/logo/logo.component';
import { PlayingTimePipe } from 'src/app/shared/pipes/playing-time.pipe';
import { Player, StatisticsPlayer } from '../../entities/home.entities';
import { KeyValue } from '@angular/common';
import { StatTableRowComponent } from './stat-table-row/stat-table-row.component';
import { StatTableHeaderComponent } from './stat-table-header/stat-table-header.component';

@Component({
  selector: 'app-stats-table',
  standalone: true,
  template: `
    <ion-card>
      <div class="flex justify-between p-4">
        <div class="flex gap-2">
          <app-logo [teamId]="teamId()" [width]="24" [height]="24" />
          <span class="text-xl">{{teamName()}}</span>
        </div>
        <ion-toggle [checked]="allStats()" (ionChange)="toggleStats()">All stats</ion-toggle>
      </div>
      <div class="flex">
        <table class="table-auto w-fit overflow-x-scroll">
          <thead>
            <tr class="border-b-2">
              <th class="border-r td-padding font-semibold">{{labelPlayers()}}</th>
            </tr>
          </thead>
          <tbody>
            @for(player of onCourt(); track $index){
            <tr>
              <td class="border-r td-padding whitespace-nowrap">{{ player.nameI }}</td>
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
              <td class="border-r td-padding whitespace-nowrap">{{ player.nameI }}</td>
            </tr>
            }
          </tbody>
        </table>
        <div class="overflow-x-scroll w-full">
          <table class="table-auto w-fit">
            <thead>
              <tr class="border-b-2" app-stat-table-header [allStats]="allStats()"></tr>
            </thead>
            <tbody>
              @for(player of onCourt(); track $index){
                <tr app-stat-table-row [stats]="player.statistics" [allStats]="allStats()"></tr>
              }
            </tbody>
            <thead>
              <tr class="border-b-2" app-stat-table-header [allStats]="allStats()"></tr>
            </thead>
            <tbody>
              @for(player of offCourt(); track $index){
                <tr app-stat-table-row [stats]="player.statistics" [allStats]="allStats()"></tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    </ion-card>
  `,
  imports: [IonicModule, PlayingTimePipe, LogoComponent, StatTableRowComponent, StatTableHeaderComponent],
})
export class StatsTableComponent {
  teamId: InputSignal<string> = input.required();
  teamName: InputSignal<string> = input.required();
  players: InputSignal<Player[]> = input.required();
  isGameActive: InputSignal<boolean> = input.required();

  allStats = signal(true)

  toggleStats(){
    this.allStats.set(!this.allStats())
  }

  labelPlayers = computed(() => {
    return !this.isGameActive() ? 'STARTERS' : 'ON COURT'
  })

  onCourt = computed(() => {
    if(!this.isGameActive()){
      return this.players().filter((player) => player.oncourt === '1');
    } else {
      return this.players().filter((player) => player.starter === '1');
    }
  });

  offCourt = computed(() => {
    if(!this.isGameActive()){
      return this.players().filter((player) => player.oncourt === '0');
    } else {
      return this.players().filter((player) => player.starter === '0');
    }
  });
}
