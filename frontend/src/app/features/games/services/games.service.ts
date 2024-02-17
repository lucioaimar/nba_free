import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Schedule } from '../entities/games.entities';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  private http = inject(HttpClient);

  getScheduleByDay(date: Date): Observable<Schedule[]> {
    const params = new HttpParams().set('date', date.toISOString());

    return this.http.get<Schedule[]>(
      'http://localhost:8000/game/get_schedule_by_day',
      { params }
    );
  }
}
