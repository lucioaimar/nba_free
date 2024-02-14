import { Component, InputSignal, input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BoxTeam } from '../../entities/home.entities';
import { LogoComponent } from 'src/app/shared/components/logo/logo.component';
import { PlayingTimePipe } from 'src/app/shared/pipes/playing-time.pipe';
import { PeriodsComponent } from '../periods/periods.component';
import { StatsTableComponent } from '../stats-table/stats-table.component';

@Component({
  selector: 'app-versus',
  template: `
    <div class="flex gap-2 items-center p-5">
      <p class="font-semibold">
        {{ awayTeam().teamName }}
      </p>
      <app-logo [teamId]="awayTeam().teamId" [width]="64" [height]="64" />
      <p class=" text-2xl font-bold">{{ awayTeam().score }}</p>
      <p class="text-2xl font-bold">{{ homeTeam().score }}</p>
      <app-logo [teamId]="homeTeam().teamId" [width]="64" [height]="64" />
      <div class="font-semibold">
        {{ homeTeam().teamName }}
      </div>
    </div>
    <app-periods [homePeriods]="homeTeam().periods" [awayPeriods]="awayTeam().periods" [homeTeamCode]="homeTeam().teamTricode" [awayTeamCode]="awayTeam().teamTricode" />

    <app-stats-table [teamId]="homeTeam().teamId" [teamName]="homeTeam().teamName" [players]="homeTeam().players" [isGameActive]="isGameActive()"/>
    
  `,
  standalone: true,
  imports: [LogoComponent, IonicModule, PlayingTimePipe, PeriodsComponent, StatsTableComponent],
})
export class VersusComponent {
  homeTeam: InputSignal<BoxTeam> = input.required();
  awayTeam: InputSignal<BoxTeam> = input.required();
  isGameActive: InputSignal<boolean> = input.required();
}
