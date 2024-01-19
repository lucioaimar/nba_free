import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LogoHelperService {

  readonly url = environment.urlLogos;

  createLogoUrlByTeamId(teamId: number){
    return this.url.replace('id', `${teamId}`)
  }
}
