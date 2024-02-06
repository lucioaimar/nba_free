import { IMAGE_LOADER, ImageLoaderConfig, NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `<img [ngSrc]="teamId()" [alt]="teamName() + ' logo'" [height]="height()" [width]="width()" priority />`,
  standalone: true,
  providers: [
    {
       provide: IMAGE_LOADER,
       useValue: (config: ImageLoaderConfig) => {
         return `https://cdn.nba.com/logos/nba/${config.src}/primary/L/logo.svg`;
       }
    },
  ],
  imports: [NgOptimizedImage]
})
export class LogoComponent {
  teamId = input.required<string>();

  width = input.required<number>();

  height = input.required<number>();

  teamName = input<string>('');

}
