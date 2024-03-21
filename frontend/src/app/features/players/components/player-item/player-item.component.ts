import { Component, computed, input } from '@angular/core';
import { IonCard } from '@ionic/angular/standalone';
import { HeadshotComponent } from 'src/app/shared/components/headshot/headshot.component';
import { Player, PlayerSimple } from '../../entities/players.entities';
import { LogoComponent } from 'src/app/shared/components/logo/logo.component';
import { getTextTeam } from 'src/app/shared/utils/color.utils';
import { NgClass } from '@angular/common';

@Component({
  selector: 'fnba-player-item',
  standalone: true,
  imports: [IonCard, HeadshotComponent, LogoComponent, NgClass],
  template: `
    <ion-card class="flex items-center gap-4">
      @if(player().jerseyNumber; as jerseyNumber){
        <div
          class="absolute font-bold text-xl drop-shadow-[0_2px_0px_rgba(255,255,255,1)] top-3 left-24"
          [ngClass]="numberColor()"
        >
          {{ jerseyNumber }}
        </div>
      }
      <fnba-headshot [playerId]="player().personId" [width]="110" />
      <div class="grow border-r">
        <h5 class="text-xl font-semibold">
          {{ player().playerFirstName }}
        </h5>
        <h5 class="text-xl font-semibold">
          {{ player().playerLastName }}
        </h5>
      </div>
      <div class="text-center px-4 py-2">
        @if (player().teamId; as teamId) {
        <div>
          <fnba-logo [teamId]="teamId" [width]="24" />
          <p>{{ player().teamAbbreviation }}</p>
        </div>
        }
        <h6 class="font-medium text-lg">{{ player().position }}</h6>
      </div>
    </ion-card>
  `
})
export class PlayerItemComponent {
  player = input.required<Player>();

  numberColor = computed(() => {
    return !!this.player().teamAbbreviation
      ? getTextTeam(this.player().teamAbbreviation!)
      : '';
  });
}
