import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { TeamDetails, TeamInfo, TeamSimple } from '../entities/team.entities';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private http = inject(HttpClient);

  $allTeamsList: Observable<TeamSimple[]> = this.http.get<TeamSimple[]>(
    `http://localhost:8000/team/get_all`
  );

  allTeamsList = toSignal(this.$allTeamsList, {
    initialValue: [] as TeamSimple[],
  });

  getTeam(teamId: string): Observable<TeamInfo> {
    const params = new HttpParams().set('team_id', teamId);

    return this.http.get<TeamInfo>(`http://localhost:8000/team/get_by_id`, {
      params,
    });
  }

  getTeamDetails(teamId: string): Observable<TeamDetails> {
    const params = new HttpParams().set('team_id', teamId);

    return this.http.get<TeamDetails>(`http://localhost:8000/team/get_details`, {
      params,
    });
  }
}
