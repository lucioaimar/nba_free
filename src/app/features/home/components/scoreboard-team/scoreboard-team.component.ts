import { Component, Input, OnInit } from '@angular/core';
import { TeamScoreboard } from '../../entities/home.entities';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-scoreboard-team',
  template: `
    <div class="flex items-center justify-between">
      <div class="flex flex-col items-center w-10">
        <img [ngSrc]="team.logoUrl || ''" alt="" height="24" width="24" priority />
        <span class="text-xs whitespace-nowrap">
          {{ team.wins }} -
          {{ team.wins }}
        </span>
      </div>
      <span class="text-lg font-bold ml-2"> {{ team.teamTricode }} </span>
      <span class="text-lg ml-4"> {{ team.score }} </span>
    </div>
  `,
  standalone: true,
  imports: [NgOptimizedImage],
})
export class ScoreboardTeamComponent {
  @Input() team!: TeamScoreboard;
}
