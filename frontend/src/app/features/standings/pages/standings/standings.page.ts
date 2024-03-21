import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { StandingsService } from '../../services/standings.service';

@Component({
  selector: 'fnba-standings',
  standalone: true,
  imports: [],
  template: `
    <p>
      standings works!
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StandingsPage {
  standingsService = inject(StandingsService);

  

}
