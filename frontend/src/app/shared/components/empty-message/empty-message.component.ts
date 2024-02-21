import { Component, input } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { basketballOutline } from 'ionicons/icons';

@Component({
  selector: 'fnba-empty-message',
  standalone: true,
  imports: [IonIcon],
  template: `
    <section
      class="flex justify-center items-center rounded border dark:border-white p-8 m-4"
    >
      <p>
        There's no {{label()}} available
      </p>
      <ion-icon name="basketball-outline" class="ml-2 text-3xl"></ion-icon>
    </section>
  `,
  
})
export class EmptyMessageComponent {
  constructor() {
    addIcons({
      basketballOutline,
    });
  }

  label = input.required<string>()
}
