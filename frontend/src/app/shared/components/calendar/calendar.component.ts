import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  computed,
  effect,
  model,
  signal,
  viewChild,
} from '@angular/core';
import { createDateSequence, isSameDay } from 'src/app/shared/utils/date.utils';
import { DatePipe, NgClass } from '@angular/common';
import { IonCard, IonModal } from '@ionic/angular/standalone';
import { SwiperOptions } from 'swiper/types';
import { SwiperContainer } from 'swiper/element';
import { SwiperDirective } from '../../directives/swiper.directive';
import { calendarOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'fnba-calendar',
  standalone: true,
  imports: [SwiperDirective, DatePipe, IonCard, IonModal, NgClass],
  template: `
    <div class="flex h-16">
      <swiper-container
        class="w-[85%] ml-0"
        appSwiper
        #swiperRef
        [config]="swiperConfig"
      >
        @for (date of dateList(); track $index) {
        <swiper-slide>
          <ion-card
            class="rounded-sm m-1 p-2 text-center"
            [ngClass]="{
              'font-semibold border dark:border-white': activeIndex() === $index
            }"
            (click)="setSelectedDate(date)"
          >
            <p>
              {{ date | date : 'EEE' }}
            </p>
            <p>
              {{ date | date : 'd MMM' }}
            </p>
          </ion-card>
        </swiper-slide>
        }
      </swiper-container>
      <ion-button id="open-modal" expand="block">
        <ion-icon slot="icon-only" name="calendar-outline"></ion-icon>
      </ion-button>
    </div>
    <ion-modal
      trigger="open-modal"
      [keepContentsMounted]="true"
      [initialBreakpoint]="0.4"
      [breakpoints]="[0, 0.4]"
    >
      <ng-template>
        <ion-content class="ion-padding">
          <ion-datetime
            presentation="date"
            [value]="selectedDate().toISOString()"
            (ionChange)="setSelectedDate($event.detail.value || '')"
            size="cover"
          ></ion-datetime>
        </ion-content>
      </ng-template>
    </ion-modal>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CalendarComponent {
  swiperRef = viewChild.required<ElementRef<SwiperContainer>>('swiperRef');

  selectedDate = model.required<Date>();

  swiperConfig: SwiperOptions = {
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  };

  constructor() {
    addIcons({ calendarOutline });
  }

  dateList = signal(
    createDateSequence(new Date('10/01/2023'), new Date('06/01/2024'))
  );

  activeIndex = computed(() => {
    return this.dateList().findIndex((d) => isSameDay(d, this.selectedDate()));
  });

  setSelectedDate(date: Date | string | string[]) {
    if (Array.isArray(date)) return;
    const d = new Date(date);
    this.selectedDate.set(d);
  }

  private slideToToday = effect(() => {
    this.swiperRef().nativeElement.swiper.slideTo(this.activeIndex() - 1);
  });
}
