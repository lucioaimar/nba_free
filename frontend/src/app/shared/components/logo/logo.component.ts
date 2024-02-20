import { IMAGE_LOADER, ImageLoaderConfig, NgOptimizedImage } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { getSizeWithAspectRatio } from '../../utils/image.utils';

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

  height = computed<number>(() => {
    return getSizeWithAspectRatio(this.width(), 1).height
  })

  teamName = input<string>('');

}
