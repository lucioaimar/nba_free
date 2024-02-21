import { Component, InputSignal, OnInit, computed, input } from '@angular/core';
import { Period } from '../../entities/home.entities';

@Component({
  selector: 'fnba-periods',
  standalone: true,
  template: `
    <table>
      <thead>
        <tr class="border-b-2">
          <th></th>
          @for (period of homePeriods(); track $index) {
          <th class="px-3">{{ period.period }}</th>
          }
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="px-3">{{ awayTeamCode() }}</td>
          @for (period of awayPeriods(); track $index) {
          <td class="px-3">{{ period.score }}</td>
          }
          <td class="px-3">{{ awayTeamScore() }}</td>
        </tr>
        <tr>
          <td class="px-3">{{ homeTeamCode() }}</td>
          @for (period of homePeriods(); track $index) {
          <td class="px-3">{{ period.score }}</td>
          }
          <td class="px-3">{{ homeTeamScore() }}</td>
        </tr>
      </tbody>
    </table>
  `,

})
export class PeriodsComponent {
  homePeriods: InputSignal<Period[]> = input.required();
  awayPeriods: InputSignal<Period[]> = input.required();
  awayTeamCode: InputSignal<string> = input.required();
  homeTeamCode: InputSignal<string> = input.required();

  homeTeamScore = computed(() => {
    return this.homePeriods().reduce((total, q) => total + q.score, 0)
  })
  awayTeamScore = computed(() => {
    return this.awayPeriods().reduce((total, q) => total + q.score, 0)
  })
}
