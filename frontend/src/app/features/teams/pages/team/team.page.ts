import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonSearchbar,
  IonButton,
  IonButtons,
  IonContent,
  IonIcon,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { searchOutline } from 'ionicons/icons';

import { TeamService } from '../../services/team.service';
import { TeamListComponent } from '../../components/team-list/team-list.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';

@Component({
  selector: 'fnba-team',
  standalone: true,
  imports: [
    IonSearchbar,
    IonButton,
    IonButtons,
    IonContent,
    CommonModule,
    FormsModule,
    TeamListComponent,
    HeaderComponent,
    IonIcon,
    IonToolbar,
  ],
  template: ` <fnba-header title="Teams">
      @if(!showSearch()){
      <ion-buttons slot="end">
        <ion-button (click)="toggleSearch()">
          <ion-icon slot="icon-only" name="search-outline"></ion-icon>
        </ion-button>
      </ion-buttons>
      } @else {
      <ion-toolbar second>
        <ion-searchbar
          type="search"
          #searchbar
          show-cancel-button="always"
          (ionInput)="updateQuery(searchbar.value || '')"
          (ionCancel)="toggleSearch()"
        />
      </ion-toolbar>
      }
    </fnba-header>
    <ion-content>
      <fnba-team-list [teamList]="teamList()" />
    </ion-content>`,
})
export class TeamPage {
  constructor() {
    addIcons({ searchOutline });
  }

  teamService = inject(TeamService);

  showSearch = signal<boolean>(false);

  searchQuery = signal<string>('');

  teamList = computed(() => {
    const query = this.searchQuery().toLowerCase();
    return this.teamService
      .allTeamsList()
      .filter((team) => team.fullName.toLowerCase().includes(query));
  });

  updateQuery(query: string) {
    this.searchQuery.set(query);
  }

  toggleSearch() {
    this.showSearch.update((value) => !value);
  }
}
