import { Component, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { PlayersService } from '../../services/players.service';
import { PlayerItemComponent } from '../../components/player-item/player-item.component';

@Component({
  selector: 'app-players',
  standalone: true,
  template: `
    <app-header title="Players"></app-header>
    <ion-content>
      @for (player of playerList(); track $index) {
        <app-player-item [player]="player" />
      }
    </ion-content>
  `,
  imports: [IonicModule, HeaderComponent, PlayerItemComponent],
})
export class PlayersPage {
  playerService = inject(PlayersService);

  playerList = this.playerService.playerList;
}
