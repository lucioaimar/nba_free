import { Component, input } from '@angular/core';
import { TeamScoreboard } from '../../entities/home.entities';
import { LogoComponent } from 'src/app/shared/components/logo/logo.component';

@Component({
  selector: 'fnba-scoreboard-team',
  standalone: true,
  imports: [LogoComponent],
  template: `
    <div class="flex items-center justify-between">
      <div class="flex flex-col items-center w-10">
        <fnba-logo
          [teamId]="team().teamId"
          [teamName]="team().teamName"
          [width]="24"
        />
        <span class="text-xs whitespace-nowrap">
          {{ team().wins }} -
          {{ team().losses }}
        </span>
      </div>
      <span class="text-lg font-bold ml-2"> {{ team().teamTricode }} </span>
      <span class="text-lg ml-4"> {{ team().score }} </span>
    </div>
  `
})
export class ScoreboardTeamComponent {
  team = input.required<TeamScoreboard>();
}
