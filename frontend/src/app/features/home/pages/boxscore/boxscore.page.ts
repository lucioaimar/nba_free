import {
  Component,
  Signal,
  inject
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  Observable,
  interval,
  mergeMap,
  of,
  switchMap,
} from 'rxjs';
import { HomeService } from '../../services/home.service';
import { Boxscore, GameStatus } from '../../entities/home.entities';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { VersusComponent } from '../../components/versus/versus.component';

@Component({
  selector: 'fnba-boxscore',
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, HeaderComponent, VersusComponent],
  template: `
    <fnba-header title="Boxscore"></fnba-header>
    <ion-content class="gap-5">
      @if(boxscore(); as boxscore){
        <fnba-versus [homeTeam]="boxscore.homeTeam" [awayTeam]="boxscore.awayTeam" [isGameActive]="boxscore.gameStatus === gameStatus.PLAYING"/>
      }
    </ion-content>
  `
})
export class BoxscorePage {
  private activatedRoute = inject(ActivatedRoute);
  private homeService = inject(HomeService);

  gameStatus = GameStatus

  gameId = this.activatedRoute.snapshot.paramMap.get('id');

  boxscoreTimer: Observable<Boxscore> = this.homeService
    .getBoxScoreByGame(this.gameId!)
    .pipe(
      switchMap((box) => {
        if (box.gameStatus === GameStatus.PLAYING) {
          return interval(10000).pipe(
            mergeMap(() => this.homeService.getBoxScoreByGame(this.gameId!))
          );
        } else {
          return of(box);
        }
      })
    );

  boxscore: Signal<Boxscore | undefined> = toSignal(this.boxscoreTimer);
}
