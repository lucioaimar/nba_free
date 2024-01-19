import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Scoreboard } from '../../entities/home.entities';
import { ScoreboardItemComponent } from '../scoreboard-item/scoreboard-item.component';
import { SwiperOptions } from 'swiper/types';
import { SwiperDirective } from 'src/app/shared/directives/swiper.directive';
import { SwiperContainer } from 'swiper/element';
import { A11y, Mousewheel, Navigation, Pagination } from 'swiper/modules';

@Component({
  selector: 'app-scoreboard-list',
  template: `
    <swiper-container appSwiper #swiperRef [config]="swiperConfig">
      @for (scoreboard of scoreboardList; track $index) {
        <swiper-slide>
          <app-scoreboard-item [scoreboard]="scoreboard" />
        </swiper-slide>
      }
    </swiper-container>
  `,
  standalone: true,
  imports: [IonicModule, CommonModule, ScoreboardItemComponent, SwiperDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ScoreboardListComponent {
  @Input() scoreboardList: Scoreboard[] = [];
  @ViewChild('swiperRef') swiperRef!: ElementRef<SwiperContainer>;

  swiperConfig: SwiperOptions = {
    spaceBetween: 10,
    slidesPerView: 2.3,
    freeMode: true,
    watchSlidesProgress: true,
  };
}
