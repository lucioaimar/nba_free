import { Component, Input, input } from '@angular/core';
import { TeamScoreboard } from '../../entities/home.entities';
import { IMAGE_LOADER, ImageLoaderConfig, NgOptimizedImage } from '@angular/common';
import { LogoComponent } from 'src/app/shared/components/logo/logo.component';

@Component({
  selector: 'app-scoreboard-team',
  template: `
    <div class="flex items-center justify-between">
        <div class="flex flex-col items-center w-10">
          <app-logo [teamId]="team().teamId" [teamName]="team().teamName" [width]="24" [height]="24" />
          <span class="text-xs whitespace-nowrap">
            {{ team().wins }} -
            {{ team().wins }}
          </span>
        </div>
        <span class="text-lg font-bold ml-2"> {{ team().teamTricode }} </span>
        <span class="text-lg ml-4"> {{ team().score }} </span>
    </div>
  `,
  standalone: true,
  imports: [LogoComponent],
})
export class ScoreboardTeamComponent {
  team = input.required<TeamScoreboard>();
}
