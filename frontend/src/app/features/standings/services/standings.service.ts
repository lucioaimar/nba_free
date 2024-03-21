import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { StandingsList } from '../entities/standings.entity';
import { environment } from 'src/environments/environment';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class StandingsService {
  private http = inject(HttpClient);

  $standingsList: Observable<StandingsList> = this.http.get<StandingsList>(
    `${environment.urlBackend}/standings`
  );

  standingsList = toSignal(this.$standingsList, {
    initialValue: [] as StandingsList,
  });
}
