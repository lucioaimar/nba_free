import { Component, input } from '@angular/core';
import { LeagueLeader } from '../../entities/home.entities';
import { IonCard } from '@ionic/angular/standalone';

@Component({
  selector: 'fnba-league-leaders',
  standalone: true,
  imports: [IonCard],
  template: `
      <ion-card class="ion-padding m-0">
        <h6 class=" text-lg font-semibold mb-2">
          {{ title() }}
        </h6>
        <table>
          @for (leagueLeader of leagueLeaders(); track $index) {
          <tr>
            <td>{{$index + 1}}.</td>
            <td class="px-2 w-full">
              {{ leagueLeader.PLAYER }}
            </td>
            <td class="px-2 text-lg font-semibold text-right">
              {{ leagueLeader[category()] }}
            </td>
          </tr>
          }
        </table>
      </ion-card>
  `
})
export class LeagueLeadersComponent {
  title = input<string>('');
  category = input<keyof LeagueLeader>('PTS')
  leagueLeaders = input.required<LeagueLeader[]>();
}
