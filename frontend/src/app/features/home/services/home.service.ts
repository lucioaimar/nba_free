import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, Subject, fromEvent } from 'rxjs';
import {
  Boxscore,
  LeagueLeader,
  Scoreboard,
  StatAbbreviation,
} from '../entities/home.entities';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private http = inject(HttpClient);

  $scoreboardList: Observable<Scoreboard[]> = this.http.get<Scoreboard[]>(
    `http://localhost:8000/home/scoreboard`
  );

  scoreBoardList = toSignal(this.$scoreboardList, {
    initialValue: [] as Scoreboard[],
  });

  getBoxScoreByGame(gameId: string): Observable<Boxscore> {
    const params = new HttpParams().set('game_id', gameId);

    return this.http.get<Boxscore>(`http://localhost:8000/home/boxscore`, {
      params,
    });
  }

  getLeagueLeaders(
    statCategory: StatAbbreviation,
    top: number = 10
  ): Observable<LeagueLeader[]> {
    const params = new HttpParams()
      .set('stat_category', statCategory)
      .set('top', top);

    return this.http.get<LeagueLeader[]>(
      `http://localhost:8000/home/league_leaders`,
      { params }
    );
  }
}
