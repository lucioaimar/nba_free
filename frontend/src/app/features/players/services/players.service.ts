import { Injectable, inject } from '@angular/core';
import { Player, PlayerSimple } from '../entities/players.entities';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  private http = inject(HttpClient);

  $playerList: Observable<Player[]> = this.http.get<Player[]>(
    `http://localhost:8000/player`
  );

  playerList = toSignal(this.$playerList, {
    initialValue: [] as Player[],
  });
}
