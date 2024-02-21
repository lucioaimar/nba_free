import { Component, inject } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { PlayersService } from '../../services/players.service';
import { PlayerItemComponent } from '../../components/player-item/player-item.component';

@Component({
  selector: 'fnba-players',
  standalone: true,
  imports: [IonContent, HeaderComponent, PlayerItemComponent],
  template: `
    <fnba-header title="Players"></fnba-header>
    <ion-content>
      @for (player of playerList(); track $index) {
        <fnba-player-item [player]="player" />
      }
    </ion-content>
  `,
})
export class PlayersPage {
  playerService = inject(PlayersService);

  playerList = this.playerService.playerList;
}
