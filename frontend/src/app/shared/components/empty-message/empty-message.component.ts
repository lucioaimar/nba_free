import { Component, input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { basketballOutline } from 'ionicons/icons';

@Component({
  selector: 'app-empty-message',
  standalone: true,
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
  imports: [IonicModule],
})
export class EmptyMessageComponent {
  constructor() {
    addIcons({
      basketballOutline,
    });
  }

  label = input.required<string>()
}
