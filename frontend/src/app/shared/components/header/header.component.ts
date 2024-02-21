import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'fnba-header',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, NgOptimizedImage],
  template: `
    <ion-header>
      <ion-toolbar>
        <div class="flex items-center p-2">
          <img ngSrc="assets/logo.png" height="48" width="48" />
          <ion-title class="-translate-x-4">{{ title() }}</ion-title>
          <ng-content />
        </div>
      </ion-toolbar>
      <ng-content select="[second]" />
    </ion-header>
  `,
})
export class HeaderComponent {
  title = input<string>('');
}
