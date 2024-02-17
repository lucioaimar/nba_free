import { NgClass } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import {IonicModule} from '@ionic/angular';

@Component({
  selector: 'app-spinner',
  standalone: true,
  template: `
    <section class="flex h-full justify-center items-center p-8 m-4" [ngClass]="tailwindTextSize()">
      <p>
        {{label()}}
      </p>
      <ion-spinner class="ml-4" [ngClass]="tailwindSpinnerSize()"/>
    </section>
  `,
  imports: [IonicModule, NgClass]
})
export class SpinnerComponent {
  size = input<number>(24);
  label = input<string>('Loading...');

  tailwindTextSize = computed(() => {
    return `text-[${this.size()}px]`
  });

  tailwindSpinnerSize = computed(() => {
    return `w-[${this.size()}px] h-[${this.size()}px]`
  });

}
