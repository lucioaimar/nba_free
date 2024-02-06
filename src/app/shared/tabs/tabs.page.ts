import { Component, EnvironmentInjector, inject } from '@angular/core';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { homeOutline, basketballOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  template: `<ion-tabs>
    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="home" href="/tabs/home">
        <ion-icon aria-hidden="true" name="home-outline"></ion-icon>
        <ion-label>Home</ion-label>
      </ion-tab-button>
      <ion-tab-button tab="team" href="/tabs/team">
        <ion-icon aria-hidden="true" name="basketball-outline"></ion-icon>
        <ion-label>Teams</ion-label>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs> `,
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    addIcons({ homeOutline, basketballOutline });
  }
}
