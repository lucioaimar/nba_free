import { Component, Signal, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TeamService } from '../../services/team.service';
import { ActivatedRoute } from '@angular/router';
import { TeamInfo } from '../../entities/team.entities';
import { toSignal } from '@angular/core/rxjs-interop';
import { LogoComponent } from 'src/app/shared/components/logo/logo.component';

@Component({
  selector: 'app-team-detail',
  template: `
  @if (team(); as team) {
    <div class="h-32 w-full flex bg-slate-600">
      <app-logo [teamId]="team.TEAM_ID.toString()!" [height]="100" [width]="100" />
      <div class="m-4">
        <h3 class="font-bold text-2xl">{{ team.TEAM_CITY + ' ' + team.TEAM_NAME }}</h3>
        <h4 class=" font-semibold text-lg">{{ team.W + '-' + team.L}} </h4>
        <h4 class=" font-semibold text-lg">{{ team.CONF_RANK + ' in ' + team.TEAM_CONFERENCE  }} </h4>
      </div>
    </div>
  }
  @else {
    Loading..
  }
  `,
  standalone: true,
  imports: [IonicModule, LogoComponent]
})
export class TeamDetailPage {
  activatedRoute = inject(ActivatedRoute);

  id = this.activatedRoute.snapshot.paramMap.get('id');

  teamService = inject(TeamService);

  team: Signal<TeamInfo | undefined> = toSignal(
    this.teamService.getTeam(+this.id!),
    {
      initialValue: undefined
    }
  );

}
