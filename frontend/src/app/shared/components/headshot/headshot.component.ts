import {
  IMAGE_LOADER,
  ImageLoaderConfig,
  NgOptimizedImage,
} from '@angular/common';
import { Component, computed, effect, input } from '@angular/core';
import { getSizeWithAspectRatio } from '../../utils/image.utils';

@Component({
  selector: 'app-headshot',
  standalone: true,
  template: `<img
    [ngSrc]="playerId()"
    [alt]="playerName() + ' headshot'"
    [height]="height()"
    [width]="width()"
    priority
  />`,
  providers: [
    {
      provide: IMAGE_LOADER,
      useValue: (config: ImageLoaderConfig) => {
        let dimensions = config.width || 0 < 100 ? '260x190' : '1040x760';
        return `https://cdn.nba.com/headshots/nba/latest/${dimensions}/${config.src}.png`;
      },
    },
  ],
  imports: [NgOptimizedImage],
})
export class HeadshotComponent {
  playerId = input.required<string>();

  width = input.required<number>();

  height = computed<number>(() => {
    return getSizeWithAspectRatio(this.width(), 1.37).height;
  });

  playerName = input<string>('');

  private ef = effect(() => {
    console.log(this.width());
  });
}
