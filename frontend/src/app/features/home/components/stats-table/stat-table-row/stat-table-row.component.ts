import { Component, InputSignal, OnInit, input } from '@angular/core';
import { PlayingTimePipe } from 'src/app/shared/pipes/playing-time.pipe';
import { StatisticsPlayer } from '../../../entities/home.entities';

@Component({
  selector: 'app-stat-table-row, tr[app-stat-table-row]',
  standalone: true,
  template: ` <td class="text-center td-padding whitespace-nowrap">
      {{ stats().minutes | playingTime }}
    </td>
    <td class="text-center td-padding whitespace-nowrap">
      {{ stats().fieldGoalsMade }}-{{ stats().fieldGoalsMade }}
    </td>
    @if(allStats()){
      <td class="text-center td-padding whitespace-nowrap">
        {{ stats().threePointersMade }}-{{ stats().threePointersMade }}
      </td>
      <td class="text-center td-padding whitespace-nowrap">
        {{ stats().freeThrowsMade }}-{{ stats().freeThrowsAttempted }}
      </td>
      <td class="text-center td-padding whitespace-nowrap">
        {{ stats().reboundsOffensive }}
      </td>
      <td class="text-center td-padding whitespace-nowrap">
        {{ stats().reboundsDefensive }}
      </td>
    }
    <td class="text-center td-padding whitespace-nowrap">
      {{ stats().reboundsTotal }}
    </td>
    <td class="text-center td-padding whitespace-nowrap">
      {{ stats().assists }}
    </td>
    <td class="text-center td-padding whitespace-nowrap">
      {{ stats().steals }}
    </td>
    <td class="text-center td-padding whitespace-nowrap">
      {{ stats().blocks }}
    </td>
    @if(allStats()){
      <td class="text-center td-padding whitespace-nowrap">
        {{ stats().turnovers }}
      </td>
      <td class="text-center td-padding whitespace-nowrap">
        {{ stats().foulsPersonal }}
      </td>
      <td class="text-center td-padding whitespace-nowrap">
        {{ stats().plusMinusPoints }}
      </td>
    }
    <td class="text-center td-padding whitespace-nowrap">
      {{ stats().points }}
    </td>`,
  imports: [PlayingTimePipe],
})
export class StatTableRowComponent {
  stats: InputSignal<StatisticsPlayer> = input.required();

  allStats: InputSignal<boolean> = input(true);
}
