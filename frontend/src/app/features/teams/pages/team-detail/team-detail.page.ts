import { Component, Signal, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TeamService } from '../../services/team.service';
import { ActivatedRoute } from '@angular/router';
import { TeamDetails, TeamInfo } from '../../entities/team.entities';
import { toSignal } from '@angular/core/rxjs-interop';
import { LogoComponent } from 'src/app/shared/components/logo/logo.component';
import { ShirtComponent } from 'src/app/shared/components/shirt/shirt.component';

@Component({
  selector: 'app-team-detail',
  template: `
    @if (team(); as team) {
    <div class="h-32 w-full flex bg-slate-600">
      <app-logo
        [teamId]="team.teamId"
        [height]="100"
        [width]="100"
      />
      <div class="m-4">
        <h3 class="font-bold text-2xl">
          {{ team.teamCity + ' ' + team.teamName }}
        </h3>
        <h4 class=" font-semibold text-lg">{{ team.w + '-' + team.l }}</h4>
        <h4 class=" font-semibold text-lg">
          {{ team.confRank + ' in ' + team.teamConference }}
        </h4>
      </div>
    </div>
    } @else { Loading.. } 
    @if(teamDetails(); as teamDetails){
      <div>
        {{ teamDetails.teamawardschampionships[0].yearawarded }}
      </div>
      <app-shirt number="12" />
    }
  `,
  standalone: true,
  imports: [IonicModule, LogoComponent, ShirtComponent],
})
export class TeamDetailPage {
  activatedRoute = inject(ActivatedRoute);

  id = this.activatedRoute.snapshot.paramMap.get('id');

  teamService = inject(TeamService);

  team: Signal<TeamInfo | undefined> = toSignal(
    this.teamService.getTeam(this.id!),
    {
      initialValue: undefined,
    }
  );

  teamDetails: Signal<TeamDetails | undefined> = toSignal(
    this.teamService.getTeamDetails(this.id!),
    {
      initialValue: undefined,
    }
  );
}
