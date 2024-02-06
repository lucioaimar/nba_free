import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-header',
  template: `
    <ion-header>
      <ion-toolbar>
        <div class="flex items-center p-2">
          <img ngSrc="assets/logo.png" height="48" width="48" />
          <ion-title class="-translate-x-4">{{title()}}</ion-title>
          <ng-content/>
        </div>
      </ion-toolbar>
      <ng-content select="[second]" />
    </ion-header>
  `,
  standalone: true,
  imports: [IonicModule, NgOptimizedImage],
})
export class HeaderComponent {
  title = input<string>('')
}
