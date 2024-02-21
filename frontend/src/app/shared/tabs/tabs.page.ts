import { Component, EnvironmentInjector, inject } from '@angular/core';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  homeOutline,
  basketballOutline,
  podiumOutline,
  bodyOutline,
  peopleOutline,
} from 'ionicons/icons';

@Component({
  selector: 'fnba-tabs',
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
  template: `<ion-tabs>
    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="home" href="/tabs/home">
        <ion-icon aria-hidden="true" name="home-outline"></ion-icon>
        <ion-label>Home</ion-label>
      </ion-tab-button>
      <ion-tab-button tab="games" href="/tabs/games">
        <ion-icon aria-hidden="true" name="basketball-outline"></ion-icon>
        <ion-label>Games</ion-label>
      </ion-tab-button>
      <ion-tab-button tab="team" href="/tabs/team">
        <ion-icon name="people-outline"></ion-icon>
        <ion-label>Teams</ion-label>
      </ion-tab-button>
      <ion-tab-button tab="players">
        <ion-icon name="body-outline"></ion-icon>
        <ion-label>Players</ion-label>
      </ion-tab-button>
      <ion-tab-button tab="standing">
        <ion-icon name="podium-outline"></ion-icon>
        <ion-label>Standings</ion-label>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs> `
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    addIcons({
      homeOutline,
      basketballOutline,
      podiumOutline,
      bodyOutline,
      peopleOutline,
    });
  }
}
