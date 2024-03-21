import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { TestSignalsComponent } from './shared/components/test-signals/test-signals.component';

@Component({
  selector: 'fnba-root',
  template: `
    
    <ion-app>
      <fnba-test-signals />
    </ion-app>
  `,
  standalone: true,
  imports: [IonApp, IonRouterOutlet, TestSignalsComponent],
})
export class AppComponent {
  constructor() {}
}
