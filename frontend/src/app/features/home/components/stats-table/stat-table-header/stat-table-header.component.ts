import { Component, InputSignal, OnInit, computed, input } from '@angular/core';

@Component({
  selector: 'app-stat-table-header, tr[app-stat-table-header]',
  standalone: true,
  template: `
    @for (stat of stats(); track $index) {
      <th class="td-padding font-semibold">{{stat}}</th>
    }
  `,
})
export class StatTableHeaderComponent {
  allStats: InputSignal<boolean> = input(true);

  stats = computed(() => {
    return this.allStats() ? this.LONG_STATS : this.SHORT_STATS;
  });

  SHORT_STATS = ['MIN', 'FG', 'REB', 'AST', 'STL', 'BLK', 'PTS'];
  LONG_STATS = [
    'MIN',
    'FG',
    '3PT',
    'FT',
    'OREB',
    'DREB',
    'REB',
    'AST',
    'STL',
    'BLK',
    'TO',
    'PF',
    '+/-',
    'PTS',
  ];
}
