import { Component, OnInit, computed, input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TeamSimple } from '../../entities/team.entities';
import { LogoComponent } from 'src/app/shared/components/logo/logo.component';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-team-list',
  template: `
    <div class="flex flex-col gap-2 my-2">
      @for(team of teamList(); track $index){
      <ion-card
        [routerLink]="[team.id]"
        class="mx-4 my-0 p-4"
        [ngClass]="'bg'"
      >
        <div class="flex gap-4 items-center">
          <app-logo
            [teamId]="team.id.toString()"
            [teamName]="team.fullName"
            [width]="50"
          />
          <h4 class="text-xl font-semibold">{{ team.fullName }}</h4>
        </div>
      </ion-card>
      }
    </div>
  `,
  standalone: true,
  imports: [IonicModule, LogoComponent, RouterLink, NgClass],
})
export class TeamListComponent {
  teamList = input<TeamSimple[]>([]);
}
