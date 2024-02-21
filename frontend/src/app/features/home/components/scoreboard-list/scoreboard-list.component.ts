import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  input,
  viewChild,
} from '@angular/core';
import { Scoreboard } from '../../entities/home.entities';
import { ScoreboardItemComponent } from '../scoreboard-item/scoreboard-item.component';
import { SwiperOptions } from 'swiper/types';
import { SwiperDirective } from 'src/app/shared/directives/swiper.directive';
import { SwiperContainer } from 'swiper/element';

@Component({
  selector: 'fnba-scoreboard-list',
  standalone: true,
  imports: [ScoreboardItemComponent, SwiperDirective],
  template: `
  @defer (when scoreboardList().length > 0) {
    <swiper-container appSwiper #swiperRef [config]="swiperConfig">
      @for (scoreboard of scoreboardList(); track $index) {
        <swiper-slide>
          <fnba-scoreboard-item [scoreboard]="scoreboard" />
        </swiper-slide>
      }
    </swiper-container>
  }
  @loading {
    Loading...
  }
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ScoreboardListComponent {
  scoreboardList = input<Scoreboard[]>([]);
  swiperRef = viewChild.required<ElementRef<SwiperContainer>>('swiperRef');

  swiperConfig: SwiperOptions = {
    spaceBetween: 10,
    slidesPerView: 2.2,
    freeMode: true,
    watchSlidesProgress: true,
  };
}
